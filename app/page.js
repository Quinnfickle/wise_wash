// app/page.js
import Link from 'next/link'; // Add this import
import './styles/page.css';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Wise Wash</h1>
      <p>Your trusted pressure washing service for homes, driveways, and windows.</p>
      <button>
        <Link href="/contact">Get a Free Quote</Link>
      </button>
    </div>
  );
}
