let form = document.querySelector("form");
        form.addEventListener("submit", e => {
            let input = e.target.querySelectorAll("input");
            let items = Array.from(input);
            let result = items
            .filter(el => el.type !== !el.name || (el.type === "checkbox" && el.checked))
            .reduce((acc, el) => `${acc}` + `${el.name} = ${el.value}\n`,'')
           
            alert(result)
        });
        
        let checkbox = document.getElementById("add");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                checkbox.insertAdjacentHTML(
                    "afterEnd",
                    '<div id="second_field"><lable> add another text </lable><input type="text" id="secondField" name="second_field"></div>'
                );
                 if (document.getElementById("secondField")) {
                    let e = document.getElementById("secondField");

                    if (localStorage.getItem(`user_val`)) {
                        e.value = localStorage.getItem(`user_val`);
                    }

                    e.oninput = function () {
                        localStorage.setItem(`user_val`, e.value);
                    };
                }                
                
                
            } else {
                let second = document.getElementById("second_field");
                second.remove(second.selectedIndex);
            }
        });