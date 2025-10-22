import React, { useState } from 'react';
import Deployment from './Deployment';

const Namespace = ({ namespace }) => {
  const { name, cpu, memory, alerts, deployments } = namespace;
  const [showAlertDetails, setShowAlertDetails] = useState(false);

  const getAlertClass = (alertCount) => {
    if (alertCount === 0) return '';
    if (alertCount <= 2) return 'warning';
    return 'critical';
  };

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

  // 生成模拟的告警详情
  const getAlertDetails = () => {
    if (alerts === 0) return [];
    
    const alertTypes = [
      { type: 'PodFailure', count: Math.floor(Math.random() * 3) + 1, message: 'Pod restart failures detected' },
      { type: 'HighCPU', count: Math.floor(Math.random() * 2) + 1, message: 'CPU usage above threshold' },
      { type: 'MemoryLeak', count: Math.floor(Math.random() * 2) + 1, message: 'Memory usage continuously increasing' },
      { type: 'NetworkIssue', count: Math.floor(Math.random() * 1) + 1, message: 'Network connectivity problems' },
      { type: 'DiskSpace', count: Math.floor(Math.random() * 1) + 1, message: 'Disk space running low' }
    ];
    
    return alertTypes.slice(0, alerts).map(alert => ({
      ...alert,
      pods: Array.from({ length: alert.count }, (_, i) => 
        `pod-${Math.random().toString(36).substr(2, 8)}-${i + 1}`
      )
    }));
  };

  return (
    <div className="namespace-container">
      <div className="namespace-header">
        <div className="namespace-title">{name}</div>
        <div className="namespace-stats">
          <div className="stat-item">
            <div className="stat-value">{formatCpu(cpu)}</div>
            <div className="stat-label">CPU</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{formatBytes(memory)}</div>
            <div className="stat-label">Memory</div>
          </div>
          <div 
            className={`alert-indicator ${getAlertClass(alerts)}`}
            onMouseEnter={() => setShowAlertDetails(true)}
            onMouseLeave={() => setShowAlertDetails(false)}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <span>⚠️</span>
            <span>{alerts} Alerts</span>
            
            {showAlertDetails && alerts > 0 && (
              <div className="alert-details">
                <div className="alert-details-header">
                  <strong>Alert Details</strong>
                </div>
                {getAlertDetails().map((alert, index) => (
                  <div key={index} className="alert-item">
                    <div className="alert-type">
                      <span className="alert-icon">🔴</span>
                      <span className="alert-message">{alert.message}</span>
                    </div>
                    <div className="alert-pods">
                      <span className="pod-count">{alert.count} pods affected:</span>
                      <div className="pod-list">
                        {alert.pods.map((pod, podIndex) => (
                          <span key={podIndex} className="pod-name">{pod}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="namespace-content">
        <div className="deployments-section">
          <div className="deployments-title">Top Resource Usage Deployments</div>
          <div className="deployment-grid">
            {deployments.map((deployment, index) => (
              <Deployment key={index} deployment={deployment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namespace;
