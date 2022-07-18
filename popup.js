// let codes = [
            //             {data_vinira_host : 'video.adstoo.com', data_vinira_secret: 'moh13689',data_vinira_active_key: '1kBsMbvPoE11FqeO'},
            //             {data_vinira_host : 'video.com', data_vinira_secret: 'moh13689',data_vinira_active_key: '1kBsMbvPoE11FqeO'},
            //         ];
            //         function getRandomItem(arr) {

            //             // get random index value
            //             const randomIndex = Math.floor(Math.random() * arr.length);

            //             // get random item
            //             const item = arr[randomIndex];

            //             return item;
            //         }
            

            function play() { 
                var vids = document.getElementsByTagName('video');
                for(let vid of vids){
                    if (vid.paused) 
                        vid.play(); 
                } 
            } 
            function pause() { 
                var vids = document.getElementsByTagName('video');
                for(let vid of vids){
                    if (vid.played) 
                        vid.pause(); 
                } 
            } 

            function doSomething(){
                var img = document.createElement("img");
                img.src = "x.png";
                img.id = "close";
                document.getElementById('loop').appendChild(img);
                //console.log(img)
                
                var x = img.addEventListener('click',()=>{
                    document.getElementById("popup").style.display = "none"
                    document.getElementById("close").style.display = "none"
                    afterLoad();
                    play();
                })
            }
            
            function closebox() {
                var timeLeft = 5;
                var elem = document.getElementById('loop');

                var timerId = setInterval(countdown, 1000);

                function countdown() {
                if (timeLeft > 0) {
                    elem.innerHTML = timeLeft + ' seconds remaining';
                    timeLeft--;
                    
                    
                } else {
                    clearTimeout(timerId);
                    elem.innerHTML = "";
                    doSomething();
                }
                }
            }

            window.addEventListener('load', whenLoad())
            function whenLoad(){
                setTimeout(function(){
                    document.getElementById("popup").style.display = "block"
                    pause()
                    closebox();
                    
                },3000)
            }
            function afterLoad(){
                setTimeout(function(){
                    var x = document.createElement("div");
                    let content = document.getElementById("content");
                    content.innerHTML = " ";
                    document.getElementById("popup").style.display = "block"
                    pause()
                    closebox();
                },10000)
            }