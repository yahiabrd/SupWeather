//fonction qui change le mode quand on clique sur le bouton light
function changeLight() {
    var source = document.getElementById("light").src;
    var splitSource = source.split("/");
    var lightImg = splitSource[4];
    if (lightImg == "light.png") {
        var mode = "Dark";
        //config pour dark mode
        document.getElementById("light").src = "/images/dark.png";
        //document.body.classList.toggle("darkLight");
        document.body.style.background = "linear-gradient(#A383ED, #34226C)";
        document.body.style.color = "white";
        document.getElementById("header").style.boxShadow = "0px 15px 10px -15px #eee";

        var nbBlock = document.querySelectorAll('.block').length;
        var nbBlock2 = document.querySelectorAll('.miniblock').length;
        if (nbBlock > 0) {//verification pour eviter les erreurs sur elements vide
            for (i = 0; i < nbBlock; i++) {//boucle qui va me permettre de recuperer tous les elements de la classe block
                document.getElementsByClassName("block")[i].style.color = "white";
                document.getElementsByClassName("block")[i].style.backgroundColor = "#210B7D";
                document.getElementsByClassName("block")[i].style.boxShadow = "0 0 20px #eee";
                var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
                var splitSourceTmpImg = tmpImg.split("/");
                var lightImgTmp = splitSourceTmpImg[4];
                if (lightImgTmp == "cloudy_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_dark.png";
                } else if (lightImgTmp == "raining_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/raining_dark.png";
                } else if (lightImgTmp == "snowing_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_dark.png";
                } else if (lightImgTmp == "storm_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/storm_dark.png";
                } else if (lightImgTmp == "sunny_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_dark.png";
                } else if (lightImgTmp == "fog_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/fog_dark.png";
                }
            }
        }
        if (nbBlock2 > 0) {
            for (i = 0; i < nbBlock2; i++) {//boucle qui va me permettre de recuperer tous les elements de la classe block
                document.getElementsByClassName("miniblock")[i].style.color = "white";
                document.getElementsByClassName("miniblock")[i].style.backgroundColor = "#210B7D";
                document.getElementsByClassName("miniblock")[i].style.boxShadow = "0 0 20px #eee";
                var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
                var splitSourceTmpImg = tmpImg.split("/");
                var lightImgTmp = splitSourceTmpImg[4];
                if (lightImgTmp == "cloudy_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_dark.png";
                } else if (lightImgTmp == "raining_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/raining_dark.png";
                } else if (lightImgTmp == "snowing_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_dark.png";
                } else if (lightImgTmp == "storm_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/storm_dark.png";
                } else if (lightImgTmp == "sunny_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_dark.png";
                } else if (lightImgTmp == "fog_light.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/fog_dark.png";
                }
            }
        }
        //block special
        var nbSpecialBlock = document.querySelectorAll('.blockspecial').length;
        if (nbSpecialBlock > 0) {
            document.getElementsByClassName("blockspecial")[0].style.color = "white";
            document.getElementsByClassName("blockspecial")[0].style.backgroundColor = "#210B7D";
            document.getElementsByClassName("blockspecial")[0].style.boxShadow = "0 0 20px #eee";
            document.getElementById('btnimg').src = "/images/btnAddDark.png";
            document.getElementById('addimg').src = "/images/addCityDark.png";
        }
    } else {
        var mode = "Light";
        //config pour light mode
        document.getElementById("light").src = "/images/light.png";
        //document.body.classList.toggle("darkLight");
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.getElementById("header").style.boxShadow = "0px 15px 10px -15px #111";

        var nbBlock = document.querySelectorAll('.block').length;
        var nbBlock2 = document.querySelectorAll('.miniblock').length;
        if (nbBlock > 0) {

            document.getElementsByClassName("block")[0].style.color = "black";
            document.getElementsByClassName("block")[0].style.backgroundColor = "white";

            for (i = 0; i < nbBlock; i++) {
                document.getElementsByClassName("block")[i].style.color = "black";
                document.getElementsByClassName("block")[i].style.backgroundColor = "#fff";
                document.getElementsByClassName("block")[i].style.boxShadow = "0 0 20px #111";
                var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
                var splitSourceTmpImg = tmpImg.split("/");
                var lightImgTmp = splitSourceTmpImg[4];
                if (lightImgTmp == "cloudy_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_light.png";
                } else if (lightImgTmp == "raining_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/raining_light.png";
                } else if (lightImgTmp == "snowing_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_light.png";
                } else if (lightImgTmp == "storm_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/storm_light.png";
                } else if (lightImgTmp == "sunny_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_light.png";
                } else if (lightImgTmp == "fog_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/fog_light.png";
                }
            }
        }

        if (nbBlock2 > 0) {

            document.getElementsByClassName("miniblock")[0].style.color = "black";
            document.getElementsByClassName("miniblock")[0].style.backgroundColor = "white";

            for (i = 0; i < nbBlock2; i++) {
                document.getElementsByClassName("miniblock")[i].style.color = "black";
                document.getElementsByClassName("miniblock")[i].style.backgroundColor = "#fff";
                document.getElementsByClassName("miniblock")[i].style.boxShadow = "0 0 20px #111";
                var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
                var splitSourceTmpImg = tmpImg.split("/");
                var lightImgTmp = splitSourceTmpImg[4];
                if (lightImgTmp == "cloudy_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_light.png";
                } else if (lightImgTmp == "raining_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/raining_light.png";
                } else if (lightImgTmp == "snowing_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_light.png";
                } else if (lightImgTmp == "storm_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/storm_light.png";
                } else if (lightImgTmp == "sunny_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_light.png";
                } else if (lightImgTmp == "fog_dark.png") {
                    document.getElementsByClassName("tmpImg")[i].src = "/images/fog_light.png";
                }
            }
        }
        
        //block special
        var nbSpecialBlock = document.querySelectorAll('.blockspecial').length;
        if (nbSpecialBlock > 0) {
            document.getElementsByClassName("blockspecial")[0].style.color = "black";
            document.getElementsByClassName("blockspecial")[0].style.backgroundColor = "#fff";
            document.getElementsByClassName("blockspecial")[0].style.boxShadow = "0 0 20px #111";
            document.getElementById('btnimg').src = "/images/btnAddWhite.png";
            document.getElementById('addimg').src = "/images/addCityLight.png";
        }
    }
    localStorage.setItem('theme', mode);
}

//fonction qui affiche le block pour ajouter une ville
function addCity() {
    document.getElementsByClassName("specialHideblock")[0].style.display = "block";
}

//fonction qui cache le block pour ajouter une ville
function hideSection() {
    document.getElementsByClassName("specialHideblock")[0].style.display = "none";
}

//fonction qui s'execute si le user a choisit une session dark mode
function sessionDarkMode() {
    //config pour dark mode
    document.getElementById("light").src = "/images/dark.png";
    //document.body.classList.toggle("darkLight");
    document.body.style.background = "linear-gradient(#A383ED, #34226C)";
    document.body.style.color = "white";
    document.getElementById("header").style.boxShadow = "0px 15px 10px -15px #eee";

    var nbBlock = document.querySelectorAll('.block').length;
    var nbBlock2 = document.querySelectorAll('.miniblock').length;
    if (nbBlock > 0) {//verification pour eviter les erreurs sur elements vide
        for (i = 0; i < nbBlock; i++) {//boucle qui va me permettre de recuperer tous les elements de la classe block
            document.getElementsByClassName("block")[i].style.color = "white";
            document.getElementsByClassName("block")[i].style.backgroundColor = "#210B7D";
            document.getElementsByClassName("block")[i].style.boxShadow = "0 0 20px #eee";
            var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
            var splitSourceTmpImg = tmpImg.split("/");
            var lightImgTmp = splitSourceTmpImg[4];
            if (lightImgTmp == "cloudy_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_dark.png";
            } else if (lightImgTmp == "raining_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/raining_dark.png";
            } else if (lightImgTmp == "snowing_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_dark.png";
            } else if (lightImgTmp == "storm_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/storm_dark.png";
            } else if (lightImgTmp == "sunny_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_dark.png";
            } else if (lightImgTmp == "fog_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/fog_dark.png";
            }
        }
    }
    if (nbBlock2 > 0) {//verification pour eviter les erreurs sur elements vide
        for (i = 0; i < nbBlock2; i++) {//boucle qui va me permettre de recuperer tous les elements de la classe block
            document.getElementsByClassName("miniblock")[i].style.color = "white";
            document.getElementsByClassName("miniblock")[i].style.backgroundColor = "#210B7D";
            document.getElementsByClassName("miniblock")[i].style.boxShadow = "0 0 20px #eee";
            var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
            var splitSourceTmpImg = tmpImg.split("/");
            var lightImgTmp = splitSourceTmpImg[4];
            if (lightImgTmp == "cloudy_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_dark.png";
            } else if (lightImgTmp == "raining_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/raining_dark.png";
            } else if (lightImgTmp == "snowing_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_dark.png";
            } else if (lightImgTmp == "storm_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/storm_dark.png";
            } else if (lightImgTmp == "sunny_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_dark.png";
            } else if (lightImgTmp == "fog_light.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/fog_dark.png";
            }
        }
    }
    //block special
    var nbSpecialBlock = document.querySelectorAll('.blockspecial').length;
    if (nbSpecialBlock > 0) {
        document.getElementsByClassName("blockspecial")[0].style.color = "white";
        document.getElementsByClassName("blockspecial")[0].style.backgroundColor = "#210B7D";
        document.getElementsByClassName("blockspecial")[0].style.boxShadow = "0 0 20px #eee";
        document.getElementById('btnimg').src = "/images/btnAddDark.png";
        document.getElementById('addimg').src = "/images/addCityDark.png";
    }
}

//fonction qui s'execute si le user a choisit un light mode
function sessionLightMode() {
    //config pour light mode
    document.getElementById("light").src = "/images/light.png";
    document.getElementById("header").style.boxShadow = "0px 15px 10px -15px #111";

    var nbBlock = document.querySelectorAll('.block').length;
    var nbBlock2 = document.querySelectorAll('.miniblock').length;
    if (nbBlock > 0) {

        document.getElementsByClassName("block")[0].style.color = "black";
        document.getElementsByClassName("block")[0].style.backgroundColor = "white";

        for (i = 0; i < nbBlock; i++) {
            document.getElementsByClassName("block")[i].style.color = "black";
            document.getElementsByClassName("block")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("block")[i].style.boxShadow = "0 0 20px #111";
            var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
            var splitSourceTmpImg = tmpImg.split("/");
            var lightImgTmp = splitSourceTmpImg[4];
            if (lightImgTmp == "cloudy_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_light.png";
            } else if (lightImgTmp == "raining_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/raining_light.png";
            } else if (lightImgTmp == "snowing_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_light.png";
            } else if (lightImgTmp == "storm_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/storm_light.png";
            } else if (lightImgTmp == "sunny_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_light.png";
            } else if (lightImgTmp == "fog_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/fog_light.png";
            }
        }
    }
    if (nbBlock2 > 0) {

        document.getElementsByClassName("miniblock")[0].style.color = "black";
        document.getElementsByClassName("miniblock")[0].style.backgroundColor = "white";

        for (i = 0; i < nbBlock2; i++) {
            document.getElementsByClassName("miniblock")[i].style.color = "black";
            document.getElementsByClassName("miniblock")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("miniblock")[i].style.boxShadow = "0 0 20px #111";
            var tmpImg = document.getElementsByClassName("tmpImg")[i].src;
            var splitSourceTmpImg = tmpImg.split("/");
            var lightImgTmp = splitSourceTmpImg[4];
            if (lightImgTmp == "cloudy_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/cloudy_light.png";
            } else if (lightImgTmp == "raining_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/raining_light.png";
            } else if (lightImgTmp == "snowing_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/snowing_light.png";
            } else if (lightImgTmp == "storm_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/storm_light.png";
            } else if (lightImgTmp == "sunny_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/sunny_light.png";
            } else if (lightImgTmp == "fog_dark.png") {
                document.getElementsByClassName("tmpImg")[i].src = "/images/fog_light.png";
            }
        }
    }
    //block special
    var nbSpecialBlock = document.querySelectorAll('.blockspecial').length;
    if (nbSpecialBlock > 0) {
        document.getElementsByClassName("blockspecial")[0].style.color = "black";
        document.getElementsByClassName("blockspecial")[0].style.backgroundColor = "#fff";
        document.getElementsByClassName("blockspecial")[0].style.boxShadow = "0 0 20px #111";
        document.getElementById('btnimg').src = "/images/btnAddWhite.png";
        document.getElementById('addimg').src = "/images/addCityLight.png";
    }
}