function wordCount(textarea){
  var text_Area=document.getElementById("message");
  var char_remaining=document.getElementById("textCount1");
  const totalCount=150;
  textarea.addEventListener("input",()=>{
    const remaining=totalCount-(textarea.value.length);
    char_remaining.textContent= `${remaining} characters remaining`;
    const color=(remaining<=totalCount*0.1)?'red':'black';
    char_remaining.style.color=color;

  });
}
