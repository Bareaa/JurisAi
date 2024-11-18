import React, { useState } from 'react';
import { Scale, Menu } from 'lucide-react';
import FileUpload from './components/FileUpload';
import AnalysisResult from './components/AnalysisResult';
import { mockAnalysis } from './mockData';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">JurisAI</h1>
                <p className="text-sm text-gray-500">Assistente Jurídico Inteligente</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showResults ? (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Análise Jurídica Inteligente
              </h2>
              <p className="text-lg text-gray-600">
                Faça upload de um documento para receber análise detalhada e recomendações
              </p>
            </div>

            <FileUpload onFileSelect={handleFileSelect} />

            {isAnalyzing && (
              <div className="mt-8">
                <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
                    <div>
                      <p className="font-medium text-gray-900">Analisando documento...</p>
                      <p className="text-sm text-gray-500 mt-1">Isso pode levar alguns segundos</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setShowResults(false)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              ← Voltar para Upload
            </button>
            <AnalysisResult analysis={mockAnalysis} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;