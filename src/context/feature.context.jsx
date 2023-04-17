import { createContext, useState } from 'react';

const featuresData = [
  {
    id: 1,
    title: 'Access your files from anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    svg: 'AccessAnywhere',
  },

  {
    id: 2,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of thesecurity features we allow to help secure your files.',
    svg: 'Security',
  },

  {
    id: 3,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live 0collaboration. No email attachments required',
    svg: 'Colab',
  },

  {
    id: 4,
    title: 'Store any type of file',
    description:
      'Whether youre sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared',
    svg: 'AnyFile',
  },
];

export const FeatureContext = createContext({
  features: [],
});

export const FeatureProvider = ({ children }) => {
  const [features] = useState(featuresData);

  const value = { features };

  return <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>;
};
