class ParticleManager {
    constructor(particles) {
        this.particles = particles;
    }

    draw() {
        this.particles.forEach(particle => {
            particle.update();
            particle.draw();
        })
    }
}