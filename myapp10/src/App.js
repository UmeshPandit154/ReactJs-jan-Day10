import React from 'react'
import './Style.css';
import Section from './components/Layouts/Section';
import Layout from './components/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default function App() {
    return (
      <Layout>
        <Section>
            <Page1></Page1>
            <Page2></Page2>
        </Section>
      </Layout> 
    )
}
