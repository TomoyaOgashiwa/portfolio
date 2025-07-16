"use client";
import { useEffect, useRef } from "react";

const FloatingDotsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 50 + 10,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
    }));

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(143, 183, 240, 0.3)";
        ctx.fill();

        dot.x += dot.dx * 0.5;
        dot.y += dot.dy * 0.5;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      className="bg-primary-50 fixed top-0 left-0 -z-10 dark:bg-neutral-900"
      ref={canvasRef}
    />
  );
};

export default FloatingDotsCanvas;
