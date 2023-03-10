import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <div className='content'>
      <h1 className='bg-title who-am-i'>Skills and Projects</h1>
      <h3 className='who-am-i-title'>Skills and Projects</h3>
      <div className='main_content'>
        <div className='skills'>
          <div>
            <h3 className='heading'>Programing Languages</h3>
            <ul className='skill_list'>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Frameworks, Libraries, CMS</h3>
            <ul className='skill_list'>
              <li>React</li>
              <li>Drupal</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Markup Languages and Frameworks</h3>
            <ul className='skill_list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Relational Databases</h3>
            <ul className='skill_list'>
              <li>MySQL</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Version Control Systems and other tools</h3>
            <ul className='skill_list'>
              <li>Git</li>
              <li>GitHub</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Operational Systems</h3>
            <ul className='skill_list'>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Package Manager</h3>
            <ul className='skill_list'>
              <li>NPM</li>
              <li>Composer</li>
            </ul>
          </div>
          <div>
            <h3 className='heading'>Learning Materials</h3>
            <ul className='skill_list'>
              <li><a href="https://codehs.com" target={"_blank"}>Codehs.com</a></li>
              <li><a href="https://freecodecamp.org" target={"_blank"}>Freecodecamp.org</a></li>
              <li><a href="https://fullstackopen.com" target={"_blank"}>Fullstackopen.com</a></li>
              <li><a href="https://youtu.be/sVbEyFZKgqk" target={"_blank"}>Youtube Course - Learn PHP The Right Way</a></li>
              <li><a href="https://www.youtube.com/@TheCodeholic" target={"_blank"}>Youtube Channel: The Codeholic</a></li>
              <li><a href="https://www.youtube.com/@WebDevSimplified" target={"_blank"}>Youtube Channel: Web Dev Simplified</a></li>
            </ul>
          </div>
        </div>
        <a href="https://github.com/DavitKheoshvili" className='github_link'>Visit Github Profile</a>
        <a href="https://www.linkedin.com/in/davit-kheoshvili-57a075155/" className='github_link'>Visit LinkedIn Profile</a>
      </div>
    </div>
  );
}

