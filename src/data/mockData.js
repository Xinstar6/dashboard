// 模拟数据
export const mockNamespaces = [
  {
    name: "default",
    cpu: 1250,
    memory: 2048000000, // 2GB in bytes
    alerts: 2,
    deployments: [
      {
        name: "nginx-deployment",
        cpu: 500,
        memory: 1024000000, // 1GB
        podCount: 3,
        pods: [
          { name: "nginx-deployment-7d4b8c9f6-abc12", status: "Running", cpu: 150, memory: 128000000 },
          { name: "nginx-deployment-7d4b8c9f6-def34", status: "Running", cpu: 120, memory: 110000000 },
          { name: "nginx-deployment-7d4b8c9f6-ghi56", status: "Running", cpu: 180, memory: 145000000 }
        ]
      },
      {
        name: "redis-deployment",
        cpu: 200,
        memory: 512000000, // 512MB
        podCount: 2,
        pods: [
          { name: "redis-deployment-5f8b9c2d1-xyz78", status: "Running", cpu: 80, memory: 180000000 },
          { name: "redis-deployment-5f8b9c2d1-uvw90", status: "Running", cpu: 95, memory: 200000000 }
        ]
      },
      {
        name: "api-server",
        cpu: 300,
        memory: 768000000, // 768MB
        podCount: 4,
        pods: [
          { name: "api-server-3a7b2c1d9-pqr12", status: "Running", cpu: 200, memory: 250000000 },
          { name: "api-server-3a7b2c1d9-stu34", status: "Running", cpu: 180, memory: 220000000 },
          { name: "api-server-3a7b2c1d9-vwx56", status: "Running", cpu: 220, memory: 280000000 },
          { name: "api-server-3a7b2c1d9-yza78", status: "Pending", cpu: 0, memory: 0 }
        ]
      },
      {
        name: "worker-service",
        cpu: 150,
        memory: 256000000, // 256MB
        podCount: 1,
        pods: [
          { name: "worker-service-9e8f7g6h5-bcd90", status: "Running", cpu: 60, memory: 120000000 }
        ]
      },
      {
        name: "monitoring-agent",
        cpu: 100,
        memory: 128000000, // 128MB
        podCount: 2,
        pods: [
          { name: "monitoring-agent-1a2b3c4d5-efg12", status: "Running", cpu: 30, memory: 60000000 },
          { name: "monitoring-agent-1a2b3c4d5-hij34", status: "Running", cpu: 35, memory: 65000000 }
        ]
      }
    ]
  },
  {
    name: "production",
    cpu: 2100,
    memory: 4096000000, // 4GB
    alerts: 0,
    deployments: [
      {
        name: "web-frontend",
        cpu: 800,
        memory: 1536000000, // 1.5GB
        podCount: 5,
        pods: [
          { name: "web-frontend-2b3c4d5e6-abc12", status: "Running", cpu: 300, memory: 400000000 },
          { name: "web-frontend-2b3c4d5e6-def34", status: "Running", cpu: 280, memory: 380000000 },
          { name: "web-frontend-2b3c4d5e6-ghi56", status: "Running", cpu: 320, memory: 420000000 },
          { name: "web-frontend-2b3c4d5e6-jkl78", status: "Running", cpu: 290, memory: 390000000 },
          { name: "web-frontend-2b3c4d5e6-mno90", status: "Running", cpu: 310, memory: 410000000 }
        ]
      },
      {
        name: "database-cluster",
        cpu: 600,
        memory: 2048000000, // 2GB
        podCount: 3,
        pods: [
          { name: "database-cluster-7f8g9h0i1-pqr12", status: "Running", cpu: 400, memory: 800000000 },
          { name: "database-cluster-7f8g9h0i1-stu34", status: "Running", cpu: 380, memory: 750000000 },
          { name: "database-cluster-7f8g9h0i1-vwx56", status: "Running", cpu: 420, memory: 850000000 }
        ]
      },
      {
        name: "cache-service",
        cpu: 400,
        memory: 1024000000, // 1GB
        podCount: 2,
        pods: [
          { name: "cache-service-4d5e6f7g8-yza78", status: "Running", cpu: 180, memory: 300000000 },
          { name: "cache-service-4d5e6f7g8-bcd90", status: "Running", cpu: 200, memory: 320000000 }
        ]
      },
      {
        name: "auth-service",
        cpu: 200,
        memory: 512000000, // 512MB
        podCount: 3,
        pods: [
          { name: "auth-service-9i0j1k2l3-efg12", status: "Running", cpu: 120, memory: 180000000 },
          { name: "auth-service-9i0j1k2l3-hij34", status: "Running", cpu: 110, memory: 170000000 },
          { name: "auth-service-9i0j1k2l3-klm56", status: "Running", cpu: 130, memory: 190000000 }
        ]
      },
      {
        name: "notification-service",
        cpu: 100,
        memory: 256000000, // 256MB
        podCount: 2,
        pods: [
          { name: "notification-service-5m6n7o8p9-nop78", status: "Running", cpu: 50, memory: 100000000 },
          { name: "notification-service-5m6n7o8p9-qrs90", status: "Running", cpu: 55, memory: 110000000 }
        ]
      }
    ]
  },
  {
    name: "staging",
    cpu: 800,
    memory: 1536000000, // 1.5GB
    alerts: 1,
    deployments: [
      {
        name: "test-api",
        cpu: 300,
        memory: 768000000, // 768MB
        podCount: 2,
        pods: [
          { name: "test-api-6a7b8c9d0-tuv12", status: "Running", cpu: 150, memory: 200000000 },
          { name: "test-api-6a7b8c9d0-wxy34", status: "Running", cpu: 140, memory: 190000000 }
        ]
      },
      {
        name: "staging-frontend",
        cpu: 200,
        memory: 512000000, // 512MB
        podCount: 1,
        pods: [
          { name: "staging-frontend-1b2c3d4e5-zab56", status: "Running", cpu: 100, memory: 150000000 }
        ]
      },
      {
        name: "test-database",
        cpu: 150,
        memory: 256000000, // 256MB
        podCount: 1,
        pods: [
          { name: "test-database-8c9d0e1f2-cde78", status: "Running", cpu: 80, memory: 120000000 }
        ]
      },
      {
        name: "mock-service",
        cpu: 100,
        memory: 128000000, // 128MB
        podCount: 1,
        pods: [
          { name: "mock-service-3d4e5f6g7-fgh90", status: "Running", cpu: 25, memory: 50000000 }
        ]
      },
      {
        name: "debug-tool",
        cpu: 50,
        memory: 64000000, // 64MB
        podCount: 1,
        pods: [
          { name: "debug-tool-9e0f1g2h3-ghi12", status: "Running", cpu: 15, memory: 30000000 }
        ]
      }
    ]
  }
];

// API 模拟函数
export const fetchNamespaces = async () => {
  // 模拟API延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockNamespaces;
};

export const generateTrendData = async (deploymentName) => {
  // 模拟生成趋势数据
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    deployment: deploymentName,
    data: [
      { time: '00:00', cpu: 45, memory: 60 },
      { time: '04:00', cpu: 38, memory: 55 },
      { time: '08:00', cpu: 65, memory: 75 },
      { time: '12:00', cpu: 72, memory: 80 },
      { time: '16:00', cpu: 68, memory: 78 },
      { time: '20:00', cpu: 55, memory: 70 },
      { time: '24:00', cpu: 48, memory: 65 }
    ]
  };
};
