import React, { useState, useEffect } from 'react';
import Namespace from './components/Namespace';
import { fetchNamespaces } from './data/mockData';

function App() {
  const [namespaces, setNamespaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchNamespaces();
        setNamespaces(data);
      } catch (err) {
        setError('Failed to load namespace data');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading Kubernetes Dashboard...</h2>
          <p>Fetching namespace and deployment information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error Loading Dashboard</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Kubernetes Cluster Dashboard</h1>
        <p>Monitor your cluster namespaces and deployments</p>
      </div>
      
      {namespaces.map((namespace, index) => (
        <Namespace key={index} namespace={namespace} />
      ))}
    </div>
  );
}

export default App;
