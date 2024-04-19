const $tableId = $("#table");

const newtr = `<tr>
<th contenteditable="true" scope="row">-- am</th>
<td contenteditable="true">--</td>
<td contenteditable="true">--</td>
<td contenteditable="true">--</td>
<td contenteditable="true">--</td>
<td contenteditable="true">--</td>
<td contenteditable="true">--</td>
<td>
    <span class="table-up edit">
        <button class="btn btn-sm indigo-text mx-1">
            <i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i>
        </button>
    </span>
    <span class="table-down edit">
        <button class="btn btn-sm indigo-text">
            <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
        </button>
    </span>
</td>
<td>
    <span class="table-remove edit">
        <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
    </span>
</td>
</tr>`;

$(".table-add").on("click" , "i" , ()=>{
    const $clone = $tableId.find('tbody tr').last().clone(true);
    if($tableId.find("tbody tr").length === 0){
        $("tbody").append(newtr);
    }else{
        $tableId.find('tbody').append($clone);
    }
})

$(".table-remove").on("click" , function (){
    $(this).parents("tr").detach();
})

$(".table-up").on("click" , function (){
    const $row = $(this).parents("tr");
    if($row.index() === 0){
        return;
    }

    $row.prev().before($row.get(0));
})

$(".table-down").on("click" , function (){
    const $row = $(this).parents("tr");
    // if($row.index() === 0){
    //     return;
    // }

    $row.next().after($row.get(0));
})



















