import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Final Fantasy Cards. Todos los derechos reservados.</p>
                <p className="text-sm">Diseñado con <span role="img" aria-label="heart">❤️</span> por Frank</p>
            </div>
        </footer>
    )
}
