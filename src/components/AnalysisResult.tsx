import React from 'react';
import { Analysis } from '../types';
import { BookOpen, Scale, Lightbulb, Gavel, Clock, AlertTriangle, Calculator, FileText } from 'lucide-react';

interface AnalysisResultProps {
  analysis: Analysis;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export default function AnalysisResult({ analysis }: AnalysisResultProps) {
  const totalCosts = analysis.estimatedCosts.reduce((acc, cost) => acc + cost.value, 0);

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Nível de Risco</h3>
            <AlertTriangle className={`w-5 h-5 ${
              analysis.riskLevel === 'high' ? 'text-red-500' :
              analysis.riskLevel === 'medium' ? 'text-yellow-500' :
              'text-green-500'
            }`} />
          </div>
          <p className={`text-2xl font-bold mt-2 ${
            analysis.riskLevel === 'high' ? 'text-red-500' :
            analysis.riskLevel === 'medium' ? 'text-yellow-500' :
            'text-green-500'
          }`}>
            {analysis.riskLevel === 'high' ? 'Alto' :
             analysis.riskLevel === 'medium' ? 'Médio' : 'Baixo'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Probabilidade de Êxito</h3>
            <Calculator className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold mt-2 text-blue-600">
            {analysis.successProbability}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Prazo Estimado</h3>
            <Clock className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold mt-2 text-purple-600">
            {analysis.estimatedTimeframe}
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          Resumo do Caso
        </h2>
        <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Key Points Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-blue-600" />
              Pontos Principais
            </h2>
            <ul className="space-y-3">
              {analysis.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recommendations Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              Recomendações
            </h2>
            <ul className="space-y-3">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Legal References Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Gavel className="w-5 h-5 text-blue-600" />
              Fundamentação Legal
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Legislação Aplicável</h3>
                <ul className="space-y-3">
                  {analysis.relevantLaws.map((law, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded">
                      <p className="font-medium text-blue-600">{law.reference}</p>
                      <p className="text-gray-700 text-sm mt-1">{law.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {law.articles.map((article, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                            {article}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Precedents Section */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-blue-600" />
              Jurisprudência
            </h2>
            <ul className="space-y-4">
              {analysis.precedents.map((precedent, index) => (
                <li key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-medium text-blue-600">{precedent.case}</p>
                  <p className="text-sm text-gray-500">{precedent.court} • {precedent.date}</p>
                  <p className="text-gray-700 mt-1">{precedent.decision}</p>
                  <p className="text-sm text-gray-600 mt-1">{precedent.relevance}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Required Documents */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-blue-600" />
            Documentos Necessários
          </h2>
          <ul className="space-y-2">
            {analysis.suggestedDocuments.map((doc, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Estimated Costs */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-blue-600" />
            Custos Estimados
          </h2>
          <ul className="space-y-3">
            {analysis.estimatedCosts.map((cost, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{cost.description}</span>
                <span className="font-medium text-gray-900">{formatCurrency(cost.value)}</span>
              </li>
            ))}
            <li className="flex justify-between items-center pt-3 border-t">
              <span className="font-medium text-gray-900">Total Estimado</span>
              <span className="font-bold text-blue-600">{formatCurrency(totalCosts)}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}