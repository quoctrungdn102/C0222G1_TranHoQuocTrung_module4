function info(id, name) {
    document.getElementById("idFacility").value = id;
    document.getElementById("name").innerHTML = name;
}

$(document).ready(function () {

    $("#creatFacility").click(function () {
        $("#exampleModal").modal("show");
    })
    $("#exampleModal").on("change", "#selectFacilityType", function () {
        switch (this.value) {
            case"1":
                document.getElementById("FreeService").style.display = "none";
                document.getElementById("divFloor").style.display = "block";
                document.getElementById("divPool").style.display = "block";
                document.getElementById("divRoom").style.display = "block";
                document.getElementById("divOther").style.display = "block";
                break;
            case"2":
                document.getElementById("FreeService").style.display = "none";
                document.getElementById("divPool").style.display = "none";
                document.getElementById("divRoom").style.display = "block";
                document.getElementById("divOther").style.display = "block";
                document.getElementById("divFloor").style.display = "block";

                break;
            case"3":
                document.getElementById("FreeService").style.display = "block";
                document.getElementById("divFloor").style.display = "none";
                document.getElementById("divPool").style.display = "none";
                document.getElementById("divRoom").style.display = "none";
                document.getElementById("divOther").style.display = "none";


                break;
        }
    })
    $("#exampleModal").on("click", "#submit", function () {
        let name = $("#exampleInputPassword3").val()
        let area = $("#exampleInputPassword32").val()
        let cost = $("#exampleInputPassword33").val()
        let people = $("#exampleInputPassword34").val()
        let facilityType = $("#selectFacilityType").val()
        let rentType = $("#selectRentType").val()
        let room = $("#exampleInputPassword35").val()
        let other = $("#exampleInputPassword36").val()
        let pool = $("#exampleInputPassword37").val()
        let floor = $("#exampleInputPassword371").val()
        let free = $("#exampleInputPassword372").val()
        let newFacility = {
            nameFacility: name,
            areaFacility: area,
            costFacility: cost,
            maxPeopleFacility: people,
            facilityType: {
                idFacilityType: facilityType
            },
            rentType: {
                idRentType: rentType
            },
            standardRoom: room,
            descriptionOther: other,
            poolArea: pool,
            numberOfFloors: floor,
            facilityFree: free
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(newFacility),
            //t??n API
            url: `/resFacility/create`,
            //x??? l?? khi th??nh c??ng
            success: function (data) {
                displayFacility();
            }
        })
        //ch???n s??? ki???n m???c ?????nh c???a th???
        event.preventDefault();

    })
    $("#exampleModal1").on("click", "#submit1", function () {
        let id = $("#idFacility1").val()
        let name = $("#NameFacility").val()
        let area = $("#AreaFacility").val()
        let cost = $("#CostFacility").val()
        let people = $("#PeopleFacility").val()
        let facilityType = $("#FacilityType").val()
        let rentType = $("#RenType").val()
        let room = $("#RoomFacility").val()
        let other = $("#OtherFacility").val()
        let pool = $("#PoolFcaility").val()
        let floor = $("#FloorFacility").val()
        let free = $("#FreeFacility").val()
        let newFacility = {
            idFacility: id,
            nameFacility: name,
            areaFacility: area,
            costFacility: cost,
            maxPeopleFacility: people,
            facilityType: {
                idFacilityType: facilityType
            },
            rentType: {
                idRentType: rentType
            },
            standardRoom: room,
            descriptionOther: other,
            poolArea: pool,
            numberOfFloors: floor,
            facilityFree: free
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(newFacility),
            //t??n API
            url: `/resFacility/create`,
            //x??? l?? khi th??nh c??ng
            success: function (data) {
                displayFacility();
            }
        })
        //ch???n s??? ki???n m???c ?????nh c???a th???
        event.preventDefault();

    })
    $("#exampleModal1").on("change", "#FacilityType", function () {
        console.log(this.value);
        switch (this.value) {
            case"1":
                document.getElementById("FreeService1").style.display = "none";
                document.getElementById("divFloor1").style.display = "block";
                document.getElementById("divPool1").style.display = "block";
                document.getElementById("divRoom1").style.display = "block";
                document.getElementById("divOther1").style.display = "block";
                break;
            case"2":
                document.getElementById("FreeService1").style.display = "none";
                document.getElementById("divPool1").style.display = "none";
                document.getElementById("divFloor1").style.display = "block";
                document.getElementById("divRoom1").style.display = "block";
                document.getElementById("divOther1").style.display = "block";
                break;
            case"3":
                document.getElementById("FreeService1").style.display = "block";
                document.getElementById("divFloor1").style.display = "none";
                document.getElementById("divPool1").style.display = "none";
                document.getElementById("divRoom1").style.display = "none";
                document.getElementById("divOther1").style.display = "none";


                break;
        }
    })

    $("#table").on("click", ".buttonEdit", function () {
        let a = $(this);
        let idFacility = a.attr("href")
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: "GET",
            //t??n API
            url: `/resFacility/findById/${idFacility}`,
            //x??? l?? khi th??nh c??ng
            success: function (data) {
                $("#exampleModal1").modal("show");


                document.getElementById("idFacility1").value = data.idFacility
                document.getElementById("NameFacility").value = data.nameFacility
                document.getElementById("AreaFacility").value = data.areaFacility
                document.getElementById("CostFacility").value = data.costFacility
                document.getElementById("PeopleFacility").value = data.maxPeopleFacility
                document.getElementById("FacilityType").value = data.facilityType.idFacilityType
                document.getElementById("RenType").value = data.rentType.idRentType
                switch (data.facilityType.idFacilityType) {
                    case 1:
                        document.getElementById("RoomFacility").value = data.standardRoom
                        document.getElementById("OtherFacility").value = data.descriptionOther
                        document.getElementById("PoolFcaility").value = data.poolArea
                        document.getElementById("FloorFacility").value = data.numberOfFloors
                        document.getElementById("FreeService1").style.display = "none";
                        document.getElementById("divFloor1").style.display = "block";
                        document.getElementById("divPool1").style.display = "block";
                        document.getElementById("divRoom1").style.display = "block";
                        document.getElementById("divOther1").style.display = "block";
                        break;
                    case 2:
                        document.getElementById("RoomFacility").value = data.standardRoom
                        document.getElementById("OtherFacility").value = data.descriptionOther
                        document.getElementById("FloorFacility").value = data.numberOfFloors
                        document.getElementById("FreeService1").style.display = "none";
                        document.getElementById("divPool1").style.display = "none";
                        document.getElementById("divFloor1").style.display = "block";
                        document.getElementById("divRoom1").style.display = "block";
                        document.getElementById("divOther1").style.display = "block";

                        break;
                    case 3:
                        document.getElementById("FreeFacility").value = data.facilityFree
                        document.getElementById("FreeService1").style.display = "block";
                        document.getElementById("divFloor1").style.display = "none";
                        document.getElementById("divPool1").style.display = "none";
                        document.getElementById("divRoom1").style.display = "none";
                        document.getElementById("divOther1").style.display = "none";
                        break

                }


            }
        })
        //ch???n s??? ki???n m???c ?????nh c???a th???
        event.preventDefault();

    })


})

function displayFacility() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        // data: JSON.stringify(newCustomer),
        //t??n API
        url: `/resFacility`,
        //x??? l?? khi th??nh c??ng
        success: function (data) {
            console.log(data);
            // console.log(data)
            //ch???n s??? ki???n m???c ?????nh c???a th???
            event.preventDefault();


            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<tr><td>${i + 1}</td>` + getFacility(data[i]);
            }
            document.getElementById('body').innerHTML = content;
        }

    })
}

function getFacility(temp) {
    return `
            <td>${temp.nameFacility}</td>
            <td>${temp.areaFacility}</td>
            <td>${temp.costFacility}</td>
            <td>${temp.maxPeopleFacility}</td>
            <td>${temp.facilityType.nameFacilityType}</td>
            <td>${temp.rentType.nameRentType}</td>
            <td>${temp.standardRoom === '' ? 'kh??ng s??? d???ng' : temp.standardRoom}</td>
            <td>${temp.descriptionOther === '' ? 'kh??ng s??? d???ng' : temp.descriptionOther}</td>
            <td>${temp.poolArea === '' ? 'kh??ng s??? d???ng' : temp.descriptionOther}</td>
            <td>${temp.numberOfFloors == null ? 'kh??ng s??? d???ng' : temp.numberOfFloors}</td>
            <td>${temp.facilityFree === '' ? "kh??ng s??? d???ng" : temp.facilityFree}</td>
            <td><a class="buttonEdit" href="${temp.idFacility}"><button>Edit</button></a></td>
            <td><a class="edit" href="${temp.idEmployee}"><button>Delete</button></a></td>
            </tr>`;
}