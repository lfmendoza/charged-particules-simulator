import React from 'react'

interface ParticleProps {
  mass: number
  charge: number
  initialSpeed: number
}

const Particle: React.FC<ParticleProps> = ({ mass, charge, initialSpeed }) => {
  // Implement particle component, display relevant information
  return (
    <div>
      <h2>Particle</h2>
      {/* Display relevant particle information */}
    </div>
  )
}

export default Particle
