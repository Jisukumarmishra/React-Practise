const fn = () => true;

const fn2 = () => {
  return true;
};
// both fn and fn2 is the same 

// simsilar examples 

const HeadingComponent = () => {
  return <h1>Hellow Word </h1>
};
// or 

const HeadingComponent2 = () => <h1>hellow word </h1>

// component composation 

const HeadingComponent3 = () => (
<div id = "container">
  <title/>
  <h1 className = "heading">Hellow Jisu Mishra</h1>
</div>
);

root.render(<HeadingComponent3/>);

// heavy workks that loads on thew laptop anfd at that time remove the laptop keyword skin 

// ✅ NOT heavy (safe, light–medium)

// HTML / CSS

// Basic JavaScript

// Writing code in VS Code

// Small React components

// Reading / editing files
// ➡️ Keyboard skin is okay

// ⚠️ CAN become heavy

// Running a local server for many hours

// Large React / MERN projects with hot reload

// Multiple Chrome tabs + VS Code + Node server
// ➡️ Medium heat

// ❌ Heavy category (remove keyboard skin)

// Building / compiling large projects

// Running Docker

// Android Studio emulator

// AI/ML training

// Video rendering

// Gaming
// ➡️ High heat



