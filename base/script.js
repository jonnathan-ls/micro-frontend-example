(function() {
    const components = [ 'angular', 'direflow', 'vue' ];

    const showHide = (id, value) => 
        document.querySelector(`#${id}`).style.display = value;

    function hideComponent(){
        showHide(this.attributes.id.textContent, 'none');
    }

    components.forEach(component => {
        document
            .querySelector(`#wc-${component}`)
            .addEventListener("click", hideComponent);
    });

    function showComponents(){
        components.forEach(c => showHide(`wc-${c}`, 'block'));
    }

    document
        .querySelector(`.sub-title`)
        .addEventListener("click", showComponents);

    components.forEach(component => {
        setTimeout(()=>{
            const el = document.querySelector(`#wc-${component}`);
            
            const loadingFailure = 
                !el.innerHTML.length && !el.shadowRoot;

            if (loadingFailure){
                el.style.fontSize = '16px';
                el.style.marginTop = '2rem';
                el.style.color = 'lightcoral';
                el.style.fontFamily = 'monospace';
                el.innerHTML = `APP-${component.toUpperCase()} INDISPONÍVEL`;
            }
        }, 1000)
    });
})();