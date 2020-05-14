import React from 'react';
import SplitPane from './components/SplitPane.js'
import SplitPaneCard from './components/SplitPaneCard.js'
import LinkButton from './components/LinkButton.js'
import Hero from './components/Hero.js'
import './styles/index.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."


function App() {
  return (
    <div>
      <Hero 
        header="George Giovanis"
        footer="Full Stack Developer"

        heroStyle="hero bg-custom-grey-800 bg-fixed bg-hero-church-on-sunday-custom-grey-900"
        headerStyle="hero-title text-custom-beige-200 border-custom-beige-200 border-opacity-50"
        footerStyle="hero-footer text-custom-beige-200"
      />

      <SplitPane 
        left={
          <SplitPaneCard
            title="Left Pane Title"
            content={
              <div>
                <p>{lorem}</p>
                <div className="card-spacer"></div>
                <LinkButton
                  content="Left Button"
                  buttonStyle="btn btn-teal btn-teal:hover"
                  link=""
                /> 
              </div> 
            }
            outerCardStyle="card text-custom-beige-200"
            titleStyle="card-title"
            contentStyle="card-content"
          />
        }
        right={
          <SplitPaneCard
            title="Right Pane Title"
            content={            
              <div>
                <p>{lorem}</p>
                <div className="card-spacer"></div>
                <LinkButton
                  content="Right Button"
                  buttonStyle="btn btn-teal btn-teal:hover"
                  link=""
                /> 
              </div> 
            }
            outerCardStyle="card text-right text-custom-beige-200"
            titleStyle="card-title"
            contentStyle="card-content"
          />
        }

        paneStyle="pane bg-custom-grey-800"
        leftPaneStyle="pane-left"
        rightPaneStyle="pane-right"
      />
    </div>


  );
}

export default App; 