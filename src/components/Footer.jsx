export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full py-8 text-center text-slate-400 text-sm pb-24 md:pb-8">
            <p>© {currentYear} <span className="font-mono font-bold text-indigo-500">GeNeSix</span>.
            </p>
        </footer>
    );
}