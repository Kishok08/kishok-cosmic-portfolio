
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sphere, useTexture } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'


function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  const texture = useTexture('/textures/2k_earth_daymap.jpg')

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace
  }, [texture])

  useFrame(({ clock }, delta) => {
    if (earthRef.current) {
      // Smooth, continuous Earth rotation
      earthRef.current.rotation.y += delta * 0.045
    }

    if (groupRef.current) {
      // Gentle floating movement
      groupRef.current.position.y =
        -0.7 + Math.sin(clock.elapsedTime * 0.3) * 0.08
    }
  })

  return (
    <group ref={groupRef} position={[4.6, -0.7, -5]}>
      {/* Realistic Earth */}
      <Sphere ref={earthRef} args={[1.65, 96, 96]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          metalness={0}
        />
      </Sphere>

      {/* Subtle atmospheric glow */}
      <Sphere args={[1.7, 96, 96]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.065}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>
    </group>
  )
}


function Saturn() {
  const group = useRef<THREE.Group>(null)
  const sphere = useRef<THREE.Mesh>(null)

  useFrame(({ clock }, delta) => {
    if (sphere.current) {
      sphere.current.rotation.y += delta * 0.009
    }

    if (group.current) {
      group.current.position.y =
        4 + Math.sin(clock.elapsedTime * 0.08) * 0.08
    }
  })

  return (
    <group
      ref={group}
      position={[7, 4, -12]}
      rotation={[0.25, 0, -0.35]}
    >
      <Sphere ref={sphere} args={[0.8, 48, 48]}>
        <meshStandardMaterial
          color="#a88c70"
          roughness={0.95}
        />
      </Sphere>

      <mesh rotation={[-Math.PI / 2.4, 0, 0]}>
        <ringGeometry args={[1.05, 1.65, 128]} />
        <meshBasicMaterial
          color="#d8c29b"
          side={THREE.DoubleSide}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

type CosmicSceneProps = {
  isMobile: boolean
  reducedMotion: boolean
}

function CosmicScene({
  isMobile,
  reducedMotion,
}: CosmicSceneProps) {
  const stars = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (stars.current && !reducedMotion) {
      stars.current.rotation.y += delta * 0.0005
    }
  })

  return (
    <>
      <ambientLight intensity={0.65} />

      <directionalLight
        position={[7, 4, 6]}
        intensity={1.5}
        color="#a6c8ff"
      />

      <pointLight
        position={[-5, 3, 1]}
        intensity={3}
        color="#a78bfa"
      />

      <group ref={stars}>
        <Stars
          radius={90}
          depth={55}
          count={isMobile ? 700 : 2200}
          factor={3}
          saturation={0}
          fade
          speed={reducedMotion ? 0 : 0.08}
        />
      </group>

      {!isMobile && !reducedMotion ? (
        <>
          <Earth />
          <Saturn />
        </>
      ) : !isMobile ? (
        <>
          <Earth />
          <Saturn />
        </>
      ) : null}
    </>
  )
}

export default function UniverseBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      '(max-width: 768px)'
    )

    const motionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const updateMobile = () => {
      setIsMobile(mobileQuery.matches)
    }

    const updateMotion = () => {
      setReducedMotion(motionQuery.matches)
    }

    const updateVisibility = () => {
      setIsVisible(!document.hidden)
    }

    updateMobile()
    updateMotion()
    updateVisibility()

    mobileQuery.addEventListener('change', updateMobile)
    motionQuery.addEventListener('change', updateMotion)
    document.addEventListener(
      'visibilitychange',
      updateVisibility
    )

    return () => {
      mobileQuery.removeEventListener(
        'change',
        updateMobile
      )

      motionQuery.removeEventListener(
        'change',
        updateMotion
      )

      document.removeEventListener(
        'visibilitychange',
        updateVisibility
      )
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050711]" />

      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[110px]" />

      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[110px]" />

      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, isMobile ? 1.25 : 1.5]}
        frameloop={
          isVisible && !reducedMotion ? 'always' : 'demand'
        }
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'low-power',
        }}
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <CosmicScene
          isMobile={isMobile}
          reducedMotion={reducedMotion}
        />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-r from-[#050711]/65 via-transparent to-transparent" />
    </div>
  )
}
