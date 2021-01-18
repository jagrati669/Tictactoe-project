<script type="text/javascript">

     function reset()
           {
              for(let i = 1; i <= 9; i++)
               {
                document.getElementById('block'+i).innerHTML=" "; 
               }
              count = 1;
              document.getElementById("game-status").innerHTML=" ";
           }
        
     function getData(block)
           {
                return document.getElementById(block).innerHTML;

           }


     function checkConditions(block1,block2,block3)
           {
                 if(getData(block1)!="" && getdata(block2)!="" && getData(block3)!="" && getData(block1)==getData(
                     block2)==getData(block3))
                     {
                         return true;
                     }
           }

      function checkWin()
         {
           if(checkConditions('block1','block2','block3') || checkConditions('block4','block5','block6') ||  checkConditions('block7','block8','block9') checkConditions('block1','block4','block7') ||  checkConditions('block2','block5','block8') ||
              checkConditions('block3','block6','block9') || checkConditions('block1','block5','block9') || checkConditions('block3','block5','block7'))
           {
             return true;
           }

         }
        
     
        var count = 1;
        function fill(control)
        {
        
          if(count <= 9)
            {
            if(count%2 == 0)
            {
               document.getElementById(control.id).innerHTML="O";
            }else
            {
                document.getElementById(control.id).innerHTML="X";
            }
            count++;
            if(checkWin())
            {
                document.getElementById("game-status").innerHTML="winner"; 
                reset();
            }
            }else
            {
                document.getElementById("game-status").innerHTML="Game ended in a Draw";
                reset();
            }
        }        
            
</script>