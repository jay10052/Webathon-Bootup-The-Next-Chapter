function assignGrade(marks) {
    if (marks >= 90) {
        return "A"; 
    } else {
        if (marks >= 70) {
            return "B";  
        } else {
            if (marks >= 50) {
                return "C";  
            } else {
                if (marks >= 35) {
                    return "D";  
                } else {
                    return "F";
                }
            }
        }
    }
}


console.log(assignGrade(95));  
console.log(assignGrade(85));  
console.log(assignGrade(65)); 
console.log(assignGrade(45));  
console.log(assignGrade(30));  
