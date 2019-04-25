import React from 'react';
import Header from './Header';

interface IProps {
   children: React.ReactNode;
}

const App: React.FC<IProps> = ({ children }) => {
   return (
      <div>
         <Header />
         {children}
      </div>
   );
};

export default App;
