"use strict";var selectorFinder=function(e){return document.querySelectorAll(e)},selectorOne=function(e){return document.querySelector(e)},slide=selectorFinder(".banner__slides_item"),arr=Array.from(slide),slideShow=function(e){Array.prototype.move=function(e,t){if(t>=arr.length)for(var r=t-arr.length;r--+1;)arr.push(void 0);arr.splice(t,0,arr.splice(e,1)[0])};var t=(arr.map(function(t){return t.classList.add(e)}),function(){var t=void 0,r=arr.length,n=function(e){return arr[e].style.order=e};if("banner__slides_moveOne"===e)for(arr.move(0,r-1),t=0;t<r;t++)n(t);if("banner__slides_moveTwo"===e)for(arr.move(r-1,0),t=r-1;t>=0;t--)n(t);arr.map(function(t){return t.classList.remove(e)})});setTimeout(function(){t()},1e3)},slideTime=setInterval(function(){return slideShow("banner__slides_moveOne")},5e3),selectLeft=selectorOne(".arrow__item_left"),selectRight=selectorOne(".arrow__item_right"),slideNext=function(e){clearInterval(slideTime),slideShow(e),slideTime=setInterval(function(){return slideShow("banner__slides_moveOne")},5e3)};selectLeft.addEventListener("click",function(){return slideNext("banner__slides_moveTwo")},!1),selectRight.addEventListener("click",function(){return slideNext("banner__slides_moveOne")},!1);var getClass=function(e){return document.querySelectorAll(e)},getClassTwo=function(e){return document.querySelector(e)},tabs=getClass(".contentTwo__tab"),tabsNum=getClass(".tabs__number"),tabsContent=getClass(".contentTwo__text"),tabOne=getClassTwo(".contentTwo__tab_one"),tabTwo=getClassTwo(".contentTwo__tab_two"),tabThree=getClassTwo(".contentTwo__tab_three"),activeFunc=function(e,t,r){Array.from(e,function(e){return e.classList.remove(t)});e[r].classList.add(t)},changerFunc=function(e){activeFunc(tabs,"contentTwo__tab_active",e),activeFunc(tabsNum,"tabs__number_active",e),activeFunc(tabsContent,"contentTwo__text_active",e)};tabOne.addEventListener("click",function(){changerFunc(0)},!1),tabTwo.addEventListener("click",function(){changerFunc(1)},!1),tabThree.addEventListener("click",function(){changerFunc(2)},!1);var initMap=function e(){google.maps.event.addDomListener(window,"load",e);var t={lat:50.4499206,lng:30.5249929},r=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#d7d7d7"},{lightness:10}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#add136"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#add136"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#add136"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}],n=new google.maps.Map(document.querySelector(".map"),{zoom:17,center:t,scrollwheel:!1,zoomControl:!1,mapTypeId:"roadmap",styles:r,streetViewControl:!1,mapTypeControl:!1}),o=new google.maps.Marker({position:t,icon:"../img/marker.png",title:"Grand Monument",map:n,optimized:!1}),s=document.createElement("div");s.classList.add("textMap"),s.innerHTML="<p>Move your mouse on marker</p>",n.controls[google.maps.ControlPosition.TOP_CENTER].push(s),o.addListener("mouseover",function(){var e=document.querySelector("img[src='../img/marker.png']");e.parentNode.classList.add("mapMarkerContainer"),e.classList.add("mapMarker"),setTimeout(function(){return e.classList.add("mapMarkerScale")},1e3)}),o.addListener("mouseout",function(){var e=document.querySelector("img[src='../img/marker.png']");e.parentNode.classList.remove("mapMarkerContainer"),e.classList.remove("mapMarker","mapMarkerScale")})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvbnRlbnRUd29UYWJzLmpzIiwibWFwLmpzIl0sIm5hbWVzIjpbInNlbGVjdG9yRmluZGVyIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3Rvck9uZSIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZSIsImFyciIsIkFycmF5IiwiZnJvbSIsInNsaWRlU2hvdyIsInByb3RvdHlwZSIsIm1vdmUiLCJvbGRfaW5kZXgiLCJuZXdfaW5kZXgiLCJsZW5ndGgiLCJrIiwicHVzaCIsInVuZGVmaW5lZCIsInNwbGljZSIsImNoYW5nZXJGdW5jIiwibWFwIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJsZW4iLCJhcnJJdGVtIiwic3R5bGUiLCJvcmRlciIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJzbGlkZVRpbWUiLCJzZXRJbnRlcnZhbCIsInNlbGVjdExlZnQiLCJzZWxlY3RSaWdodCIsInNsaWRlTmV4dCIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2xhc3MiLCJnZXRDbGFzc1R3byIsInRhYnMiLCJ0YWJzTnVtIiwidGFic0NvbnRlbnQiLCJ0YWJPbmUiLCJ0YWJUd28iLCJ0YWJUaHJlZSIsImFjdGl2ZUZ1bmMiLCJzZWxlY3RFbGVtIiwiZWxlbUNsYXNzIiwibiIsImluaXRNYXAiLCJnb29nbGUiLCJtYXBzIiwiZXZlbnQiLCJhZGREb21MaXN0ZW5lciIsIndpbmRvdyIsImNvb3JkIiwibGF0IiwibG5nIiwic3R5bGVNYXAiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsImNvbG9yIiwibGlnaHRuZXNzIiwid2VpZ2h0IiwidmlzaWJpbGl0eSIsInNhdHVyYXRpb24iLCJNYXAiLCJ6b29tIiwiY2VudGVyIiwic2Nyb2xsd2hlZWwiLCJ6b29tQ29udHJvbCIsIm1hcFR5cGVJZCIsInN0eWxlcyIsInN0cmVldFZpZXdDb250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImljb24iLCJ0aXRsZSIsIm9wdGltaXplZCIsImNvbnRyb2xEaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY29udHJvbHMiLCJDb250cm9sUG9zaXRpb24iLCJUT1BfQ0VOVEVSIiwiYWRkTGlzdGVuZXIiLCJpbWFnZU1hcmtlciIsInBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiJZQUFBLElBQU1BLGdCQUFpQixTQUFDQyxHQUFELE1BQWFDLFVBQVNDLGlCQUFpQkYsSUFDeERHLFlBQWMsU0FBQ0gsR0FBRCxNQUFhQyxVQUFTRyxjQUFjSixJQUVsREssTUFBUU4sZUFBZSx3QkFDekJPLElBQU1DLE1BQU1DLEtBQUtILE9BRWZJLFVBQVksU0FBQ1QsR0FDZk8sTUFBTUcsVUFBVUMsS0FBTyxTQUFDQyxFQUFXQyxHQUMvQixHQUFJQSxHQUFhUCxJQUFJUSxPQUVqQixJQURBLEdBQUlDLEdBQUlGLEVBQVlQLElBQUlRLE9BQ2hCQyxJQUFPLEdBQ1hULElBQUlVLEtBQUtDLE9BR2pCWCxLQUFJWSxPQUFPTCxFQUFXLEVBQUdQLElBQUlZLE9BQU9OLEVBQVcsR0FBRyxJQUd0RCxJQUVNTyxJQUZRYixJQUFJYyxJQUFJLFNBQUNDLEdBQUQsTUFBUUEsR0FBS0MsVUFBVUMsSUFBSXZCLEtBRTdCLFdBQ2hCLEdBQUl3QixHQUFBQSxPQUNBQyxFQUFNbkIsSUFBSVEsT0FDVlksRUFBVSxTQUFDRixHQUFELE1BQU1sQixLQUFJa0IsR0FBR0csTUFBTUMsTUFBUUosRUFDekMsSUFBZSwyQkFBWHhCLEVBRUEsSUFEQU0sSUFBSUssS0FBSyxFQUFHYyxFQUFJLEdBQ1hELEVBQUksRUFBR0EsRUFBRUMsRUFBS0QsSUFDZkUsRUFBUUYsRUFHaEIsSUFBZSwyQkFBWHhCLEVBRUEsSUFEQU0sSUFBSUssS0FBS2MsRUFBSSxFQUFHLEdBQ1hELEVBQUlDLEVBQUksRUFBR0QsR0FBRyxFQUFHQSxJQUNsQkUsRUFBUUYsRUFHQ2xCLEtBQUljLElBQUksU0FBQ0MsR0FBRCxNQUFRQSxHQUFLQyxVQUFVTyxPQUFPN0IsTUFHM0Q4QixZQUFXLFdBQUtYLEtBQWdCLE1BR2hDWSxVQUFZQyxZQUFZLFdBQUEsTUFBSXZCLFdBQVUsMkJBQTJCLEtBRWpFd0IsV0FBYTlCLFlBQVkscUJBQ3pCK0IsWUFBYy9CLFlBQVksc0JBRTFCZ0MsVUFBWSxTQUFDbkMsR0FDYm9DLGNBQWNMLFdBQ2R0QixVQUFVVCxHQUNWK0IsVUFBWUMsWUFBWSxXQUFBLE1BQUl2QixXQUFVLDJCQUEyQixLQUdyRXdCLFlBQVdJLGlCQUFpQixRQUFTLFdBQUEsTUFBSUYsV0FBVSw0QkFBMkIsR0FDOUVELFlBQVlHLGlCQUFpQixRQUFTLFdBQUEsTUFBSUYsV0FBVSw0QkFBMkIsRUNyRC9FLElBQUlHLFVBQVcsU0FBQ3RDLEdBQUQsTUFBYUMsVUFBU0MsaUJBQWlCRixJQUNsRHVDLFlBQWMsU0FBQ3ZDLEdBQUQsTUFBYUMsVUFBU0csY0FBY0osSUFFbER3QyxLQUFPRixTQUFTLG9CQUNoQkcsUUFBVUgsU0FBUyxpQkFDbkJJLFlBQWNKLFNBQVMscUJBQ3ZCSyxPQUFTSixZQUFZLHdCQUNyQkssT0FBU0wsWUFBWSx3QkFDckJNLFNBQVdOLFlBQVksMEJBR3ZCTyxXQUFhLFNBQUNDLEVBQVdDLEVBQVVDLEdBQ3BCMUMsTUFBTUMsS0FBS3VDLEVBQVksU0FBQzFCLEdBQUQsTUFDbENBLEdBQUtDLFVBQVVPLE9BQU9tQixJQUMxQkQsR0FBV0UsR0FBRzNCLFVBQVVDLElBQUl5QixJQUc1QjdCLFlBQWMsU0FBQzhCLEdBQ2ZILFdBQVdOLEtBQU0seUJBQTBCUyxHQUMzQ0gsV0FBV0wsUUFBUyxzQkFBdUJRLEdBQzNDSCxXQUFXSixZQUFhLDBCQUEyQk8sR0FHdkROLFFBQU9OLGlCQUFpQixRQUFTLFdBQUtsQixZQUFZLEtBQUssR0FFdkR5QixPQUFPUCxpQkFBaUIsUUFBUyxXQUFLbEIsWUFBWSxLQUFLLEdBRXZEMEIsU0FBU1IsaUJBQWlCLFFBQVMsV0FBS2xCLFlBQVksS0FBSyxFQzNCekQsSUFBSStCLFNBQVUsUUFBVkEsS0FDQUMsT0FBT0MsS0FBS0MsTUFBTUMsZUFBZUMsT0FBUSxPQUFRTCxFQUNqRCxJQUFJTSxJQUFTQyxJQUFLLFdBQVlDLElBQUssWUFDL0JDLElBRUlDLFlBQWUsUUFDZkMsWUFBZSxXQUNmQyxVQUVRQyxNQUFTLFlBR1RDLFVBQWEsT0FLckJKLFlBQWUsWUFDZkMsWUFBZSxXQUNmQyxVQUVRQyxNQUFTLFlBR1RDLFVBQWEsT0FLckJKLFlBQWUscUJBQ2ZDLFlBQWUsa0JBQ2ZDLFVBRVFDLE1BQVMsY0FLakJILFlBQWUsZUFDZkMsWUFBZSxnQkFDZkMsVUFFUUMsTUFBUyxZQUdUQyxVQUFhLE9BS3JCSixZQUFlLGVBQ2ZDLFlBQWUsa0JBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxLQUdiQyxPQUFVLE9BS2xCTCxZQUFlLGdCQUNmQyxZQUFlLFdBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxPQUtyQkosWUFBZSxhQUNmQyxZQUFlLFdBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxPQUtyQkosWUFBZSxNQUNmQyxZQUFlLFdBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxPQUtyQkosWUFBZSxXQUNmQyxZQUFlLFdBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxPQUtyQkgsWUFBZSxxQkFDZkMsVUFFUUksV0FBYyxPQUdkSCxNQUFTLFlBR1RDLFVBQWEsT0FLckJILFlBQWUsbUJBQ2ZDLFVBRVFLLFdBQWMsS0FHZEosTUFBUyxZQUdUQyxVQUFhLE9BS3JCSCxZQUFlLGNBQ2ZDLFVBRVFJLFdBQWMsU0FLdEJOLFlBQWUsVUFDZkMsWUFBZSxXQUNmQyxVQUVRQyxNQUFTLFlBR1RDLFVBQWEsT0FLckJKLFlBQWUsaUJBQ2ZDLFlBQWUsZ0JBQ2ZDLFVBRVFDLE1BQVMsWUFHVEMsVUFBYSxPQUtyQkosWUFBZSxpQkFDZkMsWUFBZSxrQkFDZkMsVUFFUUMsTUFBUyxZQUdUQyxVQUFhLEtBR2JDLE9BQVUsUUFLdEI3QyxFQUFNLEdBQUkrQixRQUFPQyxLQUFLZ0IsSUFBSW5FLFNBQVNHLGNBQWMsU0FDakRpRSxLQUFNLEdBQ05DLE9BQVFkLEVBQ1JlLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxVQUFXLFVBQ1hDLE9BQVFmLEVBQ1JnQixtQkFBbUIsRUFDbkJDLGdCQUFnQixJQUdoQkMsRUFBUyxHQUFJMUIsUUFBT0MsS0FBSzBCLFFBQ3pCQyxTQUFVdkIsRUFDVndCLEtBQU0sb0JBQ05DLE1BQU8saUJBQ1A3RCxJQUFLQSxFQUNMOEQsV0FBVyxJQUdYQyxFQUFhbEYsU0FBU21GLGNBQWMsTUFDeENELEdBQVc3RCxVQUFVQyxJQUFJLFdBQ3pCNEQsRUFBV0UsVUFBWSxtQ0FFdkJqRSxFQUFJa0UsU0FBU25DLE9BQU9DLEtBQUttQyxnQkFBZ0JDLFlBQVl4RSxLQUFLbUUsR0FFMUROLEVBQU9ZLFlBQVksWUFBYSxXQUM1QixHQUFJQyxHQUFjekYsU0FBU0csY0FBYywrQkFDekNzRixHQUFZQyxXQUFXckUsVUFBVUMsSUFBSSxzQkFDckNtRSxFQUFZcEUsVUFBVUMsSUFBSSxhQUMxQk8sV0FBVyxXQUFBLE1BQUk0RCxHQUFZcEUsVUFBVUMsSUFBSSxtQkFBbUIsT0FFaEVzRCxFQUFPWSxZQUFZLFdBQVksV0FDM0IsR0FBSUMsR0FBY3pGLFNBQVNHLGNBQWMsK0JBQ3pDc0YsR0FBWUMsV0FBV3JFLFVBQVVPLE9BQU8sc0JBQ3hDNkQsRUFBWXBFLFVBQVVPLE9BQU8sWUFBYSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VsZWN0b3JGaW5kZXIgPSAoc2VsZWN0b3IpPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IHNlbGVjdG9yT25lID0gKHNlbGVjdG9yKT0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuY29uc3Qgc2xpZGUgPSBzZWxlY3RvckZpbmRlcignLmJhbm5lcl9fc2xpZGVzX2l0ZW0nKTtcclxubGV0IGFyciA9IEFycmF5LmZyb20oc2xpZGUpO1xyXG5cclxuY29uc3Qgc2xpZGVTaG93ID0gKHNlbGVjdG9yKT0+e1xyXG4gICAgQXJyYXkucHJvdG90eXBlLm1vdmUgPSAob2xkX2luZGV4LCBuZXdfaW5kZXgpID0+e1xyXG4gICAgICAgIGlmIChuZXdfaW5kZXggPj0gYXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgayA9IG5ld19pbmRleCAtIGFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdoaWxlICgoay0tKSArIDEpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLnNwbGljZShuZXdfaW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkX2luZGV4LCAxKVswXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpdGVtQWRkID0gYXJyLm1hcCgoaXRlbSk9Pml0ZW0uY2xhc3NMaXN0LmFkZChzZWxlY3RvcikpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZXJGdW5jID0gKCk9PntcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgbGVuID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBsZXQgYXJySXRlbSA9IChpKT0+IGFycltpXS5zdHlsZS5vcmRlciA9IGk7XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yPT09J2Jhbm5lcl9fc2xpZGVzX21vdmVPbmUnKXtcclxuICAgICAgICAgICAgYXJyLm1vdmUoMCwgbGVuLTEpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpPGxlbjsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGFyckl0ZW0oaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yPT09J2Jhbm5lcl9fc2xpZGVzX21vdmVUd28nKXtcclxuICAgICAgICAgICAgYXJyLm1vdmUobGVuLTEsIDApO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSBsZW4tMTsgaT49MDsgaS0tKXtcclxuICAgICAgICAgICAgICAgIGFyckl0ZW0oaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1SZW1vdmUgPSBhcnIubWFwKChpdGVtKT0+aXRlbS5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdG9yKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCk9PntjaGFuZ2VyRnVuYygpfSwgMTAwMCk7XHJcbn07XHJcblxyXG5sZXQgc2xpZGVUaW1lID0gc2V0SW50ZXJ2YWwoKCk9PnNsaWRlU2hvdygnYmFubmVyX19zbGlkZXNfbW92ZU9uZScpLCA1MDAwKTtcclxuXHJcbmxldCBzZWxlY3RMZWZ0ID0gc2VsZWN0b3JPbmUoJy5hcnJvd19faXRlbV9sZWZ0Jyk7XHJcbmxldCBzZWxlY3RSaWdodCA9IHNlbGVjdG9yT25lKCcuYXJyb3dfX2l0ZW1fcmlnaHQnKTtcclxuXHJcbmxldCBzbGlkZU5leHQgPSAoc2VsZWN0b3IpPT57XHJcbiAgICBjbGVhckludGVydmFsKHNsaWRlVGltZSk7XHJcbiAgICBzbGlkZVNob3coc2VsZWN0b3IpO1xyXG4gICAgc2xpZGVUaW1lID0gc2V0SW50ZXJ2YWwoKCk9PnNsaWRlU2hvdygnYmFubmVyX19zbGlkZXNfbW92ZU9uZScpLCA1MDAwKTtcclxufTtcclxuXHJcbnNlbGVjdExlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+c2xpZGVOZXh0KCdiYW5uZXJfX3NsaWRlc19tb3ZlVHdvJyksIGZhbHNlKTtcclxuc2VsZWN0UmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+c2xpZGVOZXh0KCdiYW5uZXJfX3NsaWRlc19tb3ZlT25lJyksIGZhbHNlKTsiLCJsZXQgZ2V0Q2xhc3MgPSAoc2VsZWN0b3IpPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmxldCBnZXRDbGFzc1R3byA9IChzZWxlY3Rvcik9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbmxldCB0YWJzID0gZ2V0Q2xhc3MoJy5jb250ZW50VHdvX190YWInKTtcclxubGV0IHRhYnNOdW0gPSBnZXRDbGFzcygnLnRhYnNfX251bWJlcicpO1xyXG5sZXQgdGFic0NvbnRlbnQgPSBnZXRDbGFzcygnLmNvbnRlbnRUd29fX3RleHQnKTtcclxubGV0IHRhYk9uZSA9IGdldENsYXNzVHdvKCcuY29udGVudFR3b19fdGFiX29uZScpO1xyXG5sZXQgdGFiVHdvID0gZ2V0Q2xhc3NUd28oJy5jb250ZW50VHdvX190YWJfdHdvJyk7XHJcbmxldCB0YWJUaHJlZSA9IGdldENsYXNzVHdvKCcuY29udGVudFR3b19fdGFiX3RocmVlJyk7XHJcblxyXG5cclxubGV0IGFjdGl2ZUZ1bmMgPSAoc2VsZWN0RWxlbSxlbGVtQ2xhc3Msbik9PntcclxuICAgIGxldCB0YWJzSXRlbSA9IEFycmF5LmZyb20oc2VsZWN0RWxlbSwgKGl0ZW0pPT5cclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoZWxlbUNsYXNzKSk7XHJcbiAgICBzZWxlY3RFbGVtW25dLmNsYXNzTGlzdC5hZGQoZWxlbUNsYXNzKTtcclxufTtcclxuXHJcbmxldCBjaGFuZ2VyRnVuYyA9IChuKT0+e1xyXG4gICAgYWN0aXZlRnVuYyh0YWJzLCAnY29udGVudFR3b19fdGFiX2FjdGl2ZScsIG4pO1xyXG4gICAgYWN0aXZlRnVuYyh0YWJzTnVtLCAndGFic19fbnVtYmVyX2FjdGl2ZScsIG4pO1xyXG4gICAgYWN0aXZlRnVuYyh0YWJzQ29udGVudCwgJ2NvbnRlbnRUd29fX3RleHRfYWN0aXZlJywgbik7XHJcbn07XHJcblxyXG50YWJPbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e2NoYW5nZXJGdW5jKDApfSwgZmFsc2UpO1xyXG5cclxudGFiVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntjaGFuZ2VyRnVuYygxKX0sIGZhbHNlKTtcclxuXHJcbnRhYlRocmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntjaGFuZ2VyRnVuYygyKX0sIGZhbHNlKTsiLCJsZXQgaW5pdE1hcCA9ICgpID0+IHtcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0TWFwKTtcclxuICAgIGxldCBjb29yZCA9IHtsYXQ6IDUwLjQ0OTkyMDYsIGxuZzogMzAuNTI0OTkyOX07XHJcbiAgICBsZXQgc3R5bGVNYXAgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlOWU5ZTlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNkN2Q3ZDdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYWRkMTM2XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxN1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMjlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogMC4yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAxOFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYWRkMTM2XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNhZGQxMzZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiAyMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAzNlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDQwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMTlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZlZmVmZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDE3XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IDEuMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAnKSwge1xyXG4gICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIGNlbnRlcjogY29vcmQsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgIHpvb21Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBtYXBUeXBlSWQ6ICdyb2FkbWFwJyxcclxuICAgICAgICBzdHlsZXM6IHN0eWxlTWFwLFxyXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogY29vcmQsXHJcbiAgICAgICAgaWNvbjogJy4uL2ltZy9tYXJrZXIucG5nJyxcclxuICAgICAgICB0aXRsZTogJ0dyYW5kIE1vbnVtZW50JyxcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBvcHRpbWl6ZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29udHJvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udHJvbERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0TWFwJyk7XHJcbiAgICBjb250cm9sRGl2LmlubmVySFRNTCA9ICc8cD5Nb3ZlIHlvdXIgbW91c2Ugb24gbWFya2VyPC9wPic7XHJcblxyXG4gICAgbWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfQ0VOVEVSXS5wdXNoKGNvbnRyb2xEaXYpO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgKCk9PiB7XHJcbiAgICAgICAgbGV0IGltYWdlTWFya2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1tzcmM9Jy4uL2ltZy9tYXJrZXIucG5nJ11cIik7XHJcbiAgICAgICAgaW1hZ2VNYXJrZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdtYXBNYXJrZXJDb250YWluZXInKTtcclxuICAgICAgICBpbWFnZU1hcmtlci5jbGFzc0xpc3QuYWRkKCdtYXBNYXJrZXInKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5pbWFnZU1hcmtlci5jbGFzc0xpc3QuYWRkKCdtYXBNYXJrZXJTY2FsZScpLCAxMDAwKTtcclxuICAgIH0pO1xyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT4ge1xyXG4gICAgICAgIGxldCBpbWFnZU1hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjPScuLi9pbWcvbWFya2VyLnBuZyddXCIpO1xyXG4gICAgICAgIGltYWdlTWFya2VyLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFwTWFya2VyQ29udGFpbmVyJyk7XHJcbiAgICAgICAgaW1hZ2VNYXJrZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWFwTWFya2VyJywgJ21hcE1hcmtlclNjYWxlJyk7XHJcbiAgICB9KTtcclxuXHJcbn07Il19
