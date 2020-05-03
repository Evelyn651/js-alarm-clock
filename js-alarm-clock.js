var ac = {
    init : function(){
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
        ac.ths= ac.createSel(59);
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

    createSel : function(max){
        // createSel() : support function - creates a selector for hr, min, sec
        var selector = document.createElement("select");

    }
}