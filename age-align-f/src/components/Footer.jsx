import React from 'react'

function Footer() {
  return (
    <footer className="bg-body-secondary text-center py-4 border-top border-secondary-subtle ">
        
        <p>© {new Date().getFullYear()} AgeAlign</p>
        <p>Biological Age Estimation System</p>
    </footer>
  )
}

export default Footer
