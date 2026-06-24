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

  const graphData = useMemo(() => {
    const nodes = [];
    const links = [];
    const termsMap = new Map();

    // Düğümleri (Node) oluştur
    glossaryData.terms.forEach(item => {
      const id = slugify(item.term);
      termsMap.set(id, item.term);
      nodes.push({
        id,
        name: item.term,
        val: 1
      });
    });

    // Bağlantıları (Link) oluştur
    glossaryData.terms.forEach(item => {
      if (item.related && item.related.length > 0) {
        item.related.forEach(relatedTerm => {
          const targetId = slugify(relatedTerm);
          // Hedef terim gerçekten sözlükte var mı kontrol et
          if (termsMap.has(targetId)) {
            links.push({
              source: slugify(item.term),
              target: targetId
            });
          }
        });
      }
    });

    return { nodes, links };
  }, []);

  const handleNodeClick = useCallback(node => {
    // Terimin sözlükteki karşılığına git
    window.location.href = `/sozluk#${node.id}`;
  }, []);

  return (
    <Layout
      title="Kavram Haritası"
      description="İstatistik terimlerinin birbirleriyle olan ilişkilerini gösteren interaktif harita.">
      <main style={{ padding: '2rem', height: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>İstatistik Kavram Haritası</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)', maxWidth: '800px' }}>
            Sözlükteki terimlerin birbirleriyle nasıl bağlantılı olduğunu keşfedin. Terim ağını (network) fareyle sürükleyebilir, tekerlekle yakınlaşabilir ve detayını görmek istediğiniz bir düğüme tıklayarak doğrudan sözlükteki tanımına gidebilirsiniz.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link className="button button--secondary button--lg" to="/sozluk">
              Sözlüğe Dön
            </Link>
            <Link className="button button--primary button--lg" to="https://forms.gle/s5jreyNxNUiMzDkX7">
              Yeni Terim Öner
            </Link>
          </div>
        </div>
        
        <div style={{ flex: 1, border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '12px', overflow: 'hidden', position: 'relative', background: 'var(--ifm-background-surface-color)' }}>
          <BrowserOnly fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Harita yükleniyor...</div>}>
            {() => {
              const ForceGraph2D = require('react-force-graph-2d').default;
              
              return (
                <ForceGraph2D
                  ref={fgRef}
                  graphData={graphData}
                  nodeLabel="name"
                  nodeColor={() => 'var(--ifm-color-primary)'}
                  linkColor={() => 'var(--ifm-color-emphasis-400)'}
                  nodeRelSize={8}
                  linkDirectionalArrowLength={4}
                  linkDirectionalArrowRelPos={1}
                  onNodeClick={handleNodeClick}
                  cooldownTicks={100}
                  onEngineStop={() => {
                    if (fgRef.current) {
                      fgRef.current.zoomToFit(400, 50);
                    }
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
