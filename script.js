var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");

      function opentab(tabname) {
        //tabname will receive onclick name as skills,experience,education.!
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link"); //it adds 50% after down line
        document.getElementById(tabname).classList.add("active-tab"); // adds content
      }


