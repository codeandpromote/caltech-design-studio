"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

/**
 * Physics-driven gold particle field.
 * Each particle has its own velocity. They drift slowly in random directions,
 * with a soft attraction toward the cursor and a gentle return-to-center spring.
 */
function PhysicsParticles({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  // Pre-allocate position + velocity buffers
  const { positions, velocities, sizes, anchors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const anchors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 8;
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      anchors[i * 3 + 0] = x;
      anchors[i * 3 + 1] = y;
      anchors[i * 3 + 2] = z;

      velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 2] = 0;

      sizes[i] = Math.random() * 0.03 + 0.015;
    }

    return { positions, velocities, sizes, anchors };
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const dt = Math.min(delta, 0.05);

    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    // Mouse position in world space (R3F mouse is normalized -1..1)
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;

    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = ix + 1;
      const iz = ix + 2;

      // Spring back to anchor (soft)
      const ax = (anchors[ix] - arr[ix]) * 0.0008;
      const ay = (anchors[iy] - arr[iy]) * 0.0008;

      // Mouse attraction with falloff
      const dx = mx - arr[ix];
      const dy = my - arr[iy];
      const distSq = dx * dx + dy * dy + 0.5;
      const pull = 0.02 / distSq;
      const px = dx * pull;
      const py = dy * pull;

      // Subtle wave drift for organic motion
      const wx = Math.sin(t * 0.4 + i * 0.13) * 0.0006;
      const wy = Math.cos(t * 0.3 + i * 0.17) * 0.0006;

      // Update velocity (with damping)
      velocities[ix] = velocities[ix] * 0.97 + ax + px + wx;
      velocities[iy] = velocities[iy] * 0.97 + ay + py + wy;

      arr[ix] += velocities[ix];
      arr[iy] += velocities[iy];
    }

    posAttr.needsUpdate = true;
    ref.current.rotation.z = Math.sin(t * 0.05) * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#dfbe5b"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (a.current) {
      a.current.rotation.x += delta * 0.07;
      a.current.rotation.y += delta * 0.04;
    }
    if (b.current) {
      b.current.rotation.y -= delta * 0.05;
      b.current.rotation.z += delta * 0.03;
    }
  });
  return (
    <>
      <mesh ref={a} position={[0, 0, -3]}>
        <torusGeometry args={[4.2, 0.014, 16, 220]} />
        <meshBasicMaterial color="#c9a14a" transparent opacity={0.22} />
      </mesh>
      <mesh ref={b} position={[1.5, -0.5, -4]} rotation={[0.7, 0, 0]}>
        <torusGeometry args={[2.8, 0.008, 12, 180]} />
        <meshBasicMaterial color="#dfbe5b" transparent opacity={0.18} />
      </mesh>
    </>
  );
}

export default function AmbientCanvas({
  density = 700,
}: {
  density?: number;
}) {
  // Reduce particle count on small screens for performance
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? Math.round(density * 0.45) : density;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <PhysicsParticles count={count} />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
