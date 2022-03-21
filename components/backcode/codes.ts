const codes = [
  `class Takara:<br>
&nbsp;&nbsp;def __init__(self):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("<strong>My name is takara.</strong>")<br>
<br>
&nbsp;&nbsp;def say_girlfriend(self):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("<strong>No girlfriend :(</strong>")`,

  `#include &lt;iostream&gt;<br>
using namespace std;<br>
<br>
int main(void) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;int sum = 0;<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i <= 10; ++i) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += i;<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;cout << sum << "&#92;n";<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>
}`,

  `package main<br>
<br>
func gcd(a, b int) int {<br>
&nbsp;&nbsp;&nbsp;&nbsp;if b == 0 {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a<br>
&nbsp;&nbsp;&nbsp;&nbsp;} else {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return gcd(b, a % b)<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}`,

  `import React from 'react';<br>
<br>
const World = () => {<br>
&nbsp;&nbsp;const name = '<strong>Takara</strong>';<br>
<br>
&nbsp;&nbsp;return (<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{name} World!!&lt;/div&gt;<br>
&nbsp;&nbsp;);<br>
};<br>
<br>
export default World;`
];

export default codes;
