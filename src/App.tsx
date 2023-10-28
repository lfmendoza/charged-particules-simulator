import React, { useState } from 'react'
import ParticleSimulator from 'components/ParticleSimulator'

const App: React.FC = () => {
  const [particleCharge, setParticleCharge] = useState<number>(0)
  const [lineCharge, setLineCharge] = useState<number>(0)
  const [planeCharge, setPlaneCharge] = useState<number>(0)

  // Add state for other parameters as needed

  return (
    <div>
      <h1>Particle Simulator</h1>
      {/* Input components for charges and other parameters */}
      <ParticleSimulator
        particleCharge={particleCharge}
        lineCharge={lineCharge}
        planeCharge={planeCharge}
      />
    </div>
  )
}

export default App
