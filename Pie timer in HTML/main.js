// Copyright (C) 2022 Govind Panchawat
//
// This file is part of Pie timer in HTML.
//
// Pie timer in HTML is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pie timer in HTML is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pie timer in HTML.  If not, see <http://www.gnu.org/licenses/>.

var loader = document.getElementById("loader"),
  border = document.getElementById("border"),
  α = 0,
  π = Math.PI,
  t = 30;

(function draw() {
  α++;
  α %= 360;
  var r = (α * π) / 180,
    x = Math.sin(r) * 125,
    y = Math.cos(r) * -125,
    mid = α > 180 ? 1 : 0,
    anim = "M 0 0 v -125 A 125 125 1 " + mid + " 1 " + x + " " + y + " z";

  loader.setAttribute("d", anim);
  border.setAttribute("d", anim);

  setTimeout(draw, t); // Redraw
})();
