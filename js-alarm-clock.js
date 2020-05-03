var ac = {
    init: function () {
        // ac.intit() : start the alarm clock

        //get the current time - hour, min, sec
        ac.chr = document.getElementById("chr");
        ac.cmin = document.getElementById("cmin");
        ac.csec = document.getElementById("csec");

        // the time picker - hr, min, sec
        ac.thr = ac.createSel(23);
        document.getElementById("tpick-h").appendChild(ac.thr);
        ac.thm = ac.createSel(59);
        document.getElementById("tpick-m").appendChild(ac.thr);
        ac.ths = ac.createSel(59);
        document.getElementById("tpick-s").appendChild(ac.thr);

        // the time picker - set, reset
        ac.tset = document.getElementById("tset");
        ac.tset.addEventListener("click", ac.set);
        ac.treset = document.getElementById("treset");
        ac.treset.addEventListener("click", ac.reset);

        // the alarm sound
        ac.sound = document.getElementById("alarm-sound");

        //start the clock
        ac.alarm = null;
        setInterval(ac.tick, 1000);
    },

    createSel: function (max) {
        // createSel() : support function - creates a selector for hr, min, sec
        var selector = document.createElement("select");
        for (var i = 0; i < max; i++) {
            var opt = document.createElement("option");
            i = ac.padzero(i);
            opt.value = i;
            opt.innerHTML = i;
            selector.appendChild(opt);
        }
        return selector
    },

    padzero: function (num) {
        //ac.padzero() : support function - pads hr, min, sec with 0 if < 10
        if (num < 10) {
            num = "0" + num;
        } else {
            num = num.toString();
        }
        return num
    },

    tick: function () {
        //ac.tick() : update the current time
        //current time
        var now = new Date();
        var hr = ac.padzero(now.getHours());
        var min = ac.padzero(now.getMinutes());
        var sec = ac.padzero(now.getSeconds());

        //update current clock
        ac.chr.innerHTML = hr;
        ac.cmin.innerHTML = min;
        ac.csec.innerHTML = sec;

        //check and sound alarm
        if (ac.alarm != null) {
            now = hr + min + sec;
            if (now === ac.alarm) {
                if (ac.sound.paused) {
                    ac.sounds.play();
                }
            }
        }

    },

    set : function(){
        // ac.set() : set the alarm

        ac.alarm = ac.thr.value + ac.this.value;
        ac.thr.disabled = true;
        ac.thm.disabled = true;
        ac.ths.disabled = true;
        ac.tset.disabled = true;
        ac.treset.disabled = false;
    },

    reset : function(){
        //ac.reset() : reset the alarm

        if(!ac.sound.paused){
            ac.sound.pause();
        }
        ac.thr.disabled = false;
        ac.thm.disabled = false;
        ac.ths.disabled = false;
        ac.tset.disabled = false;
        ac.treset.disabled = true;
    }
};

//init - run alarm clock
window.addEventListener("load", ac.init);