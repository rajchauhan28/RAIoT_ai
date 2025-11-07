import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Header from './Header';

// Test suite for the Header component
describe('Header Component', () => {
  // Test Case 1: Verify that the Header component renders correctly
  it('renders the Header component without crashing', () => {
    render(<Header activeSection="about" setActiveSection={() => {}} />);
    
    // Check if the header element is present
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  // Test Case 2: Verify that the project title is present in the document
  it('contains the project title "Real-Time ISL Translator"', () => {
    render(<Header activeSection="about" setActiveSection={() => {}} />);
    
    // Check if the project title is present
    const titleElement = screen.getByRole('heading', { name: /real-time isl translator/i });
    expect(titleElement).toBeInTheDocument();
  });

  // Test Case 3: Verify that the navigation buttons are rendered
  it('renders the navigation buttons for "About" and "Actual Project"', () => {
    render(<Header activeSection="about" setActiveSection={() => {}} />);
    
    // Check if both navigation buttons are present
    const aboutButton = screen.getByRole('button', { name: /about/i });
    const projectButton = screen.getByRole('button', { name: /actual project/i });
    
    expect(aboutButton).toBeInTheDocument();
    expect(projectButton).toBeInTheDocument();
  });

  // Additional test: Verify that the correct button is marked as active when about is active
  it('marks the "About" button as active when activeSection is "about"', () => {
    render(<Header activeSection="about" setActiveSection={() => {}} />);
    
    const aboutButton = screen.getByRole('button', { name: /about/i });
    expect(aboutButton).toHaveClass('active');
    
    const projectButton = screen.getByRole('button', { name: /actual project/i });
    expect(projectButton).not.toHaveClass('active');
  });
  
  // Additional test: Verify that the correct button is marked as active when project is active
  it('marks the "Actual Project" button as active when activeSection is "project"', () => {
    render(<Header activeSection="project" setActiveSection={() => {}} />);
    
    const aboutButton = screen.getByRole('button', { name: /about/i });
    expect(aboutButton).not.toHaveClass('active');
    
    const projectButton = screen.getByRole('button', { name: /actual project/i });
    expect(projectButton).toHaveClass('active');
  });
});