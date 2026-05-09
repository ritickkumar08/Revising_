function Grade(){

    const student ={
        name:"ritick",
        english:85,
        math:91,
        computer:91
    }

    function grade(stu){
        const total = stu.english + stu.math + stu.computer
        if(total >= 225){
            return "A";
        }else if(total < 225 && total >= 180){
            return "B";
        }else if(total < 180 && total >= 150 ){
            return "C"
        }else{
            return "D"
        }
    }
    return(
        <div>
            <h1>Ritick's Result</h1>
            <h2>grade: {grade(student)}</h2>
        </div>
    )
}

export default Grade