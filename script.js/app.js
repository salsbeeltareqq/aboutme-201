var name = prompt("enter your name", "name")
alert("welcome"+name);

        alert("please the following questions by yes or no");
        var guitar = prompt("do you love guitar", "yes");
        console.log("do you love guitar", guitar);
        var look = prompt("do you loocking for someone who teach you playing guitar", "yes");
        console.log("do you loocking for someone who teach you playing guitar", look);
        var amman = prompt("do you live in amman", "yes");
        console.log("do you live in amman", amman);
        var salsbeel = prompt("do you heard about my company ", "yes");
        console.log("do you heard about my company", salsbeel);
        alert(`guitar ${guitar}\n looking-for ${look}\n live in amman  ${amman}\n salsbeelcompany ${salsbeel}\n`)
        console.log(guitar, look, amman, salsbeel);
        
        
        var bella = 0;
        if (guitar === "yes") bella++
        if (look === "yes") bella++
        if (amman === "yes") bella++
        if (salsbeel === "yes")bella++
        console.log(bella);
        // give user a rank
        let rank;
        if (bella === 0) rank = "noob"
        if (bella === 1) rank = "rookie"
        if (bella === 2) rank = "moderate"
        if (bella === 3) rank = "pro"
        if (bella === 4) rank = "Ibn-Batoota"
        console.log(rank);
        alert(`Hello ${name}. your adventure meter is ${travelMeter} and your rank is ${rank}`)
        document.querySelector(".name").innerHTML = name
        document.querySelector(".rank").innerHTML = rank
        document.querySelector(".guitar").innerHTML = "do you love guitar" + guitar
        document.querySelector(".look").innerHTML = "do you loocking for someone who teach you playing guitar" + look
        document.querySelector(".amman").innerHTML = "do you live in amman " + amman
        document.querySelector(".salsbeel").innerHTML = "do heard about my company " + salsbeel