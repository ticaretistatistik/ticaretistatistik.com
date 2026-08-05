import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

import glossaryData from '@site/src/data/glossary.json';
import styles from './kavram-haritasi.module.css';

function slugify(term) {
  return String(term)
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function ConceptMapContent() {
  const fgRef = useRef();
  const [hoverNode, setHoverNode] = useState(null);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const graphData = useMemo(() => {
    const nodes = [];
    const links = [];
    const termsMap = new Map();

    glossaryData.terms.forEach(item => {
      const id = slugify(item.term);
      termsMap.set(id, item.term);
      nodes.push({ id, name: item.term, val: 1 });
    });

    glossaryData.terms.forEach(item => {
      if (item.related && item.related.length > 0) {
        item.related.forEach(relatedTerm => {
          const targetId = slugify(relatedTerm);
          if (termsMap.has(targetId)) {
            links.push({ source: slugify(item.term), target: targetId });
          }
        });
      }
    });

    return { nodes, links };
  }, []);

  const handleNodeClick = useCallback(node => {
    window.location.href = `/sozluk#${node.id}`;
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Kavram Ağı</h1>
          <p className={styles.description}>
            İstatistik terimleri arasındaki yapısal ilişkiler. Odaklanmak için bir terimin üzerine gelin, tanımına gitmek için tıklayın. Farenizin tekerleğiyle yakınlaşıp uzaklaşabilirsiniz.
          </p>
        </div>
        <Link to="/sozluk" className={styles.backBtn}>
          Sözlüğe Dön
        </Link>
      </div>
      
      <div className={styles.graphContainer}>
        <BrowserOnly fallback={<div className={styles.loading}>Ağ yükleniyor...</div>}>
          {() => {
            const ForceGraph2D = require('react-force-graph-2d').default;
            
            const colors = {
              bg: isDark ? '#18181b' : '#ffffff',
              text: isDark ? '#f0f0f0' : '#09090b',
              textInverse: isDark ? '#09090b' : '#ffffff',
              border: isDark ? '#3e3e42' : '#e4e4e7',
              borderHover: isDark ? '#f5cf06' : '#18181b',
              bgHover: isDark ? '#f5cf06' : '#18181b',
              link: isDark ? '#2d2d30' : '#e4e4e7',
              linkNeighbor: isDark ? '#737373' : '#a1a1aa',
              shadowNormal: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.04)',
              shadowHover: isDark ? 'rgba(245,207,6,0.3)' : 'rgba(0,0,0,0.15)',
            };

            return (
              <ForceGraph2D
                ref={fgRef}
                graphData={graphData}
                nodeLabel={() => ''} 
                linkColor={(link) => {
                  if (!hoverNode) return colors.link;
                  const isHoveredLink = link.source.id === hoverNode.id || link.target.id === hoverNode.id;
                  return isHoveredLink ? colors.bgHover : (isDark ? '#1a1a1a' : '#f4f4f5');
                }}
                linkWidth={(link) => {
                  if (!hoverNode) return 1.5;
                  return (link.source.id === hoverNode.id || link.target.id === hoverNode.id) ? 3 : 1;
                }}
                onNodeHover={(node) => {
                  if (node) {
                    document.body.style.cursor = 'pointer';
                  } else {
                    document.body.style.cursor = 'default';
                  }
                  setHoverNode(node);
                }}
                onNodeClick={handleNodeClick}
                d3VelocityDecay={0.15}
                cooldownTicks={200}
                onEngineStop={() => {
                  if (fgRef.current) fgRef.current.zoomToFit(800, 100);
                }}
                nodeCanvasObject={(node, ctx, globalScale) => {
                  const label = node.name;
                  const fontSize = 14 / globalScale;
                  ctx.font = `600 ${fontSize}px Inter, -apple-system, sans-serif`;
                  const textWidth = ctx.measureText(label).width;
                  const paddingX = fontSize * 1.3;
                  const paddingY = fontSize * 0.9;
                  const bckgDimensions = [textWidth + paddingX * 2, fontSize + paddingY * 2]; 

                  const isHovered = hoverNode === node;
                  const isNeighbor = hoverNode && graphData.links.some(l => 
                    (l.source.id === hoverNode.id && l.target.id === node.id) || 
                    (l.target.id === hoverNode.id && l.source.id === node.id)
                  );
                  
                  const opacity = hoverNode ? (isHovered || isNeighbor ? 1 : 0.15) : 1;
                  ctx.globalAlpha = opacity;
                  
                  ctx.fillStyle = isHovered ? colors.bgHover : colors.bg;
                  ctx.strokeStyle = isHovered ? colors.borderHover : (isNeighbor ? colors.linkNeighbor : colors.border);
                  ctx.lineWidth = (isHovered ? 2.5 : 1.5) / globalScale;

                  if (!isHovered) {
                    ctx.shadowColor = colors.shadowNormal;
                    ctx.shadowBlur = 8 / globalScale;
                    ctx.shadowOffsetY = 2 / globalScale;
                  } else {
                    ctx.shadowColor = colors.shadowHover;
                    ctx.shadowBlur = 16 / globalScale;
                    ctx.shadowOffsetY = 4 / globalScale;
                  }

                  ctx.beginPath();
                  const width = bckgDimensions[0];
                  const height = bckgDimensions[1];
                  const radius = height / 2;
                  const x = node.x - width / 2;
                  const y = node.y - height / 2;
                  
                  if (ctx.roundRect) {
                    ctx.roundRect(x, y, width, height, radius);
                  } else {
                    ctx.moveTo(x + radius, y);
                    ctx.lineTo(x + width - radius, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                    ctx.lineTo(x + width, y + height - radius);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                    ctx.lineTo(x + radius, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                    ctx.lineTo(x, y + radius);
                    ctx.quadraticCurveTo(x, y, x + radius, y);
                    ctx.closePath();
                  }

                  ctx.fill();
                  ctx.shadowColor = 'transparent'; 
                  ctx.stroke();

                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillStyle = isHovered ? colors.textInverse : colors.text;
                  ctx.fillText(label, node.x, node.y + (fontSize * 0.05));
                  ctx.globalAlpha = 1; 
                }}
              />
            );
          }}
        </BrowserOnly>
      </div>
    </main>
  );
}

export default function ConceptMapPage() {
  return (
    <Layout
      title="Kavram Haritası"
      description="İstatistik terimlerinin birbirleriyle olan ilişkilerini gösteren interaktif harita.">
      <ConceptMapContent />
    </Layout>
  );
}
