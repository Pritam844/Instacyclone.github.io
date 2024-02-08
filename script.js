      
 document.addEventListener('DOMContentLoaded', function () {
            var qui = document.querySelector('.qui');
            var qu = document.querySelector('.qu');
            var prd = document.querySelector('.prd');
            var pr = document.querySelector('.pr');

            qui.addEventListener('click', function () {
                prd.style.display = 'none';
                pr.style.display = 'block';
            });

            qu.addEventListener('click', function () {
                prd.style.display = 'block';
                pr.style.display = 'none';
            });
        });
        
        
    document.addEventListener('DOMContentLoaded', function () {
        var qui = document.querySelector('.qui');
        var qu = document.querySelector('.qu');
        var prd = document.querySelector('.prd');
        var pr = document.querySelector('.pr');

        qui.addEventListener('click', function () {
            qui.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
            qui.style.color = 'white';

            qu.style.background = '#d6d6d67b';
            qu.style.color = 'black';

            prd.style.display = 'none';
            pr.style.display = 'block';
        });

        qu.addEventListener('click', function () {
            qui.style.background = '#d6d6d67b';
            qui.style.color = 'black';

            qu.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
            qu.style.color = 'white';

            prd.style.display = 'block';
            pr.style.display = 'none';
        });
    });
    
    
