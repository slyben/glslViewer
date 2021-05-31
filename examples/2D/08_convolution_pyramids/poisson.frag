
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2        u_resolution;

uniform sampler2D   u_poissonFill;
uniform sampler2D   u_tex0;
uniform vec2        u_tex0Resolution;


void main (void) {
    vec4 color = vec4(0.0);
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

#if defined(POISSON_FILL)
    color = texture2D(u_tex0, st);

#else
    color = texture2D(u_poissonFill, st);

#endif

    gl_FragColor = color;
}