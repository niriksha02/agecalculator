
        function fun()
        {
            // get current date detail

            var c_date=parseInt(document.getElementById("cd").value);
            var c_month=parseInt(document.getElementById("cm").value);
            var c_year=parseInt(document.getElementById("cy").value);

            // get DOB

            var d_date=parseInt(document.getElementById("yd").value);
            var d_month=parseInt(document.getElementById("ym").value);
            var d_year=parseInt(document.getElementById("yy").value);


            var disp_year=document.getElementById("disp_year");
            var disp_month=document.getElementById("disp_month");
            var disp_days=document.getElementById("disp_days");


            var dd_date=document.getElementById("yd").value;
            var dd_month=document.getElementById("ym").value;
            var dd_year=document.getElementById("yy").value;

            if(dd_date=="Date" || dd_month=="Month" || dd_year=="Year")
            {
                alert("Please select your DOB");

                return false;
            }


           // alert(c_date+d_date);




            // program logic


              // condition if dob date is > current date
                if(d_date>c_date)
                {
                    if(d_month==1 ||d_month==3 || d_month==5 || d_month==7 || d_month==8 || d_month==10 || d_month==12)
                    {
                         c_date=c_date+31;
                    }
                    if(d_month==4 ||d_month==6 || d_month==9 || d_month==11 )
                    {
                         c_date=c_date+30;
                    }

                    if(d_month==2)
                    {
                        if(d_year%4==0)
                        {
                            c_date=c_date+29;
                        }
                        else
                        {
                            c_date=c_date+28;
                        }
                    }
                     y_date=c_date-d_date;
                     c_month=c_month-1;
                }

                // if dob date is !> current date
                else
                {
                    y_date=c_date-d_date;
                }


                if(d_month>c_month)
                {
                    c_month=c_month+12;
                    y_month=c_month-d_month;
                    c_year=c_year-1;
                }
                else
                {
                    y_month=c_month-d_month;
                }


                y_year=c_year-d_year;

                if(y_year<0 || y_month<0 || y_date<0 )
                {
                      alert("current date should be \n greater then or equal to your dob");
                      return false;
                }
                else
                {




                disp_year.innerHTML=y_year+" Year";
                disp_month.innerHTML=y_month+"  Month";
                disp_days.innerHTML=y_date+"  Days";
                }
        }

        function clr()
        {
           // alert("ok");
            var disp_year=document.getElementById("disp_year");
            var disp_month=document.getElementById("disp_month");
            var disp_days=document.getElementById("disp_days");

            disp_year.innerHTML="";
            disp_month.innerHTML="";
            disp_days.innerHTML="";

        }
