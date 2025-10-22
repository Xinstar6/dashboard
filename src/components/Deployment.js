import React, { useState } from 'react';
import { TrendingUp, BarChart3, ChevronDown, ChevronRight } from 'lucide-react';

const Deployment = ({ deployment }) => {
  const { name, cpu, memory, podCount, pods } = deployment;
  const [showTrend, setShowTrend] = useState(false);
  const [showPods, setShowPods] = useState(false);

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatCpu = (cpu) => {
    return `${cpu}m`;
  };

  const handleTrendClick = () => {
    setShowTrend(!showTrend);
    // 这里可以添加生成趋势图的逻辑
    console.log(`Generating trend diagram for deployment: ${name}`);
  };


  return (
    <div className="deployment-row">
      <div className="deployment-main">
        <div className="deployment-info">
          <div className="deployment-name">{name}</div>
          <div className="deployment-metrics-row">
            <span className="metric">CPU: {formatCpu(cpu)}</span>
            <span className="metric">Memory: {formatBytes(memory)}</span>
            <span className="metric">Pods: {podCount}</span>
          </div>
        </div>
        
        <div className="deployment-actions">
          <button 
            className="pods-toggle" 
            onMouseEnter={() => setShowPods(true)}
            onMouseLeave={() => setShowPods(false)}
          >
            <span>Pods</span>
            {showPods ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          <button 
            className="trend-button-small" 
            onClick={handleTrendClick}
          >
            <BarChart3 size={16} />
            Trend
          </button>
        </div>
      </div>
      
      {showPods && (
        <div 
          className="pods-dropdown"
          onMouseEnter={() => setShowPods(true)}
          onMouseLeave={() => setShowPods(false)}
        >
          <div className="pods-list">
            {pods.map((pod, index) => (
              <div key={index} className="pod-item-detailed">
                <div className="pod-name">{pod.name}</div>
                <div className="pod-status">{pod.status}</div>
                <div className="pod-metrics">
                  <span className="pod-metric">CPU: {formatCpu(pod.cpu || Math.floor(Math.random() * 100) + 50)}</span>
                  <span className="pod-metric">Mem: {formatBytes(pod.memory || Math.floor(Math.random() * 200000000) + 50000000)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showTrend && (
        <div className="trend-section">
          <div className="trend-content">
            📊 Trend diagram for {name} would be displayed here
          </div>
        </div>
      )}
    </div>
  );
};

export default Deployment;
