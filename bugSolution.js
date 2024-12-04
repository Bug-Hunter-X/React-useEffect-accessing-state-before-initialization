```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way: using the optional dependency array 
    console.log('Count:', count);
  }, [count]); // <-- added count to dependencies

  // Alternative solution:
  // useEffect(() => {
  //   if(count !== undefined) {
  //     console.log('Count:', count);
  //   }
  // }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```