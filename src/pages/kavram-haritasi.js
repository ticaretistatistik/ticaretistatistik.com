import React, { useMemo, useState, useCallback, useRef } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import glossaryData from '@site/src/data/glossary.json';
import Link from '@docusaurus/Link';

function slugify(term) {
  return String(term)
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ConceptMapPage() {
  const fgRef = useRef();
  const [hoverNode, setHoverNode] = useState(null);

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
    <Layout
      title="Kavram Haritası"
      description="İstatistik terimlerinin birbirleriyle olan ilişkilerini gösteren interaktif harita.">
      <main style={{ padding: '3rem 2rem', minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1200px', margin: '0 auto 2rem auto', width: '100%' }}>
          <div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '600', 
              color: '#09090b',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}>
              Kavram Ağı
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#52525b', margin: 0, maxWidth: '600px', lineHeight: '1.5' }}>
              İstatistik terimleri arasındaki yapısal ilişkiler. Odaklanmak için bir terimin üzerine gelin, tanımına gitmek için tıklayın.
            </p>
          </div>
          <Link 
            to="/sozluk"
            style={{
              padding: '0.5rem 1rem',
              background: '#fff',
              border: '1px solid #e4e4e7',
              borderRadius: '6px',
              color: '#18181b',
              fontWeight: '500',
              textDecoration: 'none',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#f4f4f5'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; }}
          >
            Sözlüğe Dön
          </Link>
        </div>
        
        <div style={{ 
          flex: 1, 
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          borderRadius: '12px', 
          overflow: 'hidden', 
          position: 'relative', 
          background: '#ffffff',
          border: '1px solid #e4e4e7',
          boxShadow: '0 4px 24px -12px rgba(0, 0, 0, 0.05)'
        }}>
          <BrowserOnly fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#a1a1aa' }}>Ağ yükleniyor...</div>}>
            {() => {
              const ForceGraph2D = require('react-force-graph-2d').default;
              
              return (
                <ForceGraph2D
                  ref={fgRef}
                  graphData={graphData}
                  nodeLabel={() => ''} 
                  linkColor={(link) => {
                    if (!hoverNode) return '#e4e4e7';
                    const isHoveredLink = link.source.id === hoverNode.id || link.target.id === hoverNode.id;
                    return isHoveredLink ? '#18181b' : '#f4f4f5';
                  }}
                  linkWidth={(link) => {
                    if (!hoverNode) return 1;
                    return (link.source.id === hoverNode.id || link.target.id === hoverNode.id) ? 2 : 1;
                  }}
                  onNodeHover={(node) => {
                    // Set cursor
                    if (node) {
                      document.body.style.cursor = 'pointer';
                    } else {
                      document.body.style.cursor = 'default';
                    }
                    setHoverNode(node);
                  }}
                  onNodeClick={handleNodeClick}
                  d3VelocityDecay={0.2} // Makes the physics settle much more elegantly and stops "jittering" quickly
                  cooldownTicks={150}
                  onEngineStop={() => {
                    if (fgRef.current) fgRef.current.zoomToFit(800, 100);
                  }}
                  nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.name;
                    const fontSize = 13 / globalScale;
                    ctx.font = `500 ${fontSize}px Inter, -apple-system, sans-serif`;
                    const textWidth = ctx.measureText(label).width;
                    const paddingX = fontSize * 1.2;
                    const paddingY = fontSize * 0.8;
                    const bckgDimensions = [textWidth + paddingX * 2, fontSize + paddingY * 2]; 

                    const isHovered = hoverNode === node;
                    const isNeighbor = hoverNode && graphData.links.some(l => 
                      (l.source.id === hoverNode.id && l.target.id === node.id) || 
                      (l.target.id === hoverNode.id && l.source.id === node.id)
                    );
                    
                    const opacity = hoverNode ? (isHovered || isNeighbor ? 1 : 0.2) : 1;
                    ctx.globalAlpha = opacity;
                    
                    // Editorial minimalist styling
                    ctx.fillStyle = isHovered ? '#18181b' : '#ffffff';
                    ctx.strokeStyle = isHovered ? '#18181b' : (isNeighbor ? '#a1a1aa' : '#e4e4e7');
                    ctx.lineWidth = (isHovered ? 2 : 1) / globalScale;

                    // Extremely subtle, high-end shadow
                    if (!isHovered) {
                      ctx.shadowColor = 'rgba(0, 0, 0, 0.04)';
                      ctx.shadowBlur = 8 / globalScale;
                      ctx.shadowOffsetY = 2 / globalScale;
                    } else {
                      ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
                      ctx.shadowBlur = 16 / globalScale;
                      ctx.shadowOffsetY = 6 / globalScale;
                    }

                    ctx.beginPath();
                    const width = bckgDimensions[0];
                    const height = bckgDimensions[1];
                    const radius = height / 2;
                    const x = node.x - width / 2;
                    const y = node.y - height / 2;
                    
                    // Fallback for older browsers just in case, but modern Safari/Chrome support roundRect
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
                    ctx.shadowColor = 'transparent'; // Reset shadow for stroke & text
                    ctx.stroke();

                    // Text
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = isHovered ? '#ffffff' : '#09090b';
                    // subtle adjustment to vertically center font visually
                    ctx.fillText(label, node.x, node.y + (fontSize * 0.05));
                    ctx.globalAlpha = 1; 
                  }}
                />
              );
            }}
          </BrowserOnly>
        </div>
      </main>
    </Layout>
  );
}
