
import ErrorDemo from './components/ErrorDemo'
import CounterDemo from './components/CounterDemo'
import ErrorBoundaries from './components/ErrorBoundaries'

function App() {
  return (
    <div>
     App Component
     <ErrorBoundaries>
      <ErrorDemo name="hello" />
     </ErrorBoundaries>
     
     <ErrorBoundaries>
      <CounterDemo />
     </ErrorBoundaries>
     
    </div>
  );
}

export default App;
