       const photoPreview = document.getElementById('photoPreview');
        const magicButton = document.getElementById('magicButton');
        const magicArea = document.getElementById('magicArea');

        function createMagicParticle() {
            const particle = document.createElement('div');
            particle.className = 'magic-particle';
            const size = Math.floor(Math.random() * 18) + 14;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 90 + 5}%`;
            particle.style.top = `${Math.random() * 90 + 5}%`;
            particle.style.animationDuration = `${Math.random() * 1.2 + 1.4}s`;
            particle.style.opacity = '0';
            magicArea.appendChild(particle);
            requestAnimationFrame(() => {
                particle.style.opacity = '1';
            });
            particle.addEventListener('animationend', () => particle.remove());
        }

        function launchMagic() {
            magicButton.disabled = true;
            for (let i = 0; i < 25; i += 1) {
                setTimeout(createMagicParticle, i * 40);
            }

            const message = document.createElement('div');
            message.className = 'magic-message';
            message.textContent = 'Мама, ты волшебница!';
            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
                magicButton.disabled = false;
            }, 2600);
        }

        magicButton.addEventListener('click', launchMagic);