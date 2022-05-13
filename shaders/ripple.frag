#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_texcoord = texcoord * 2.0 - 1.0;
    float r = length(new_texcoord);
    vec2 offset = new_texcoord * (sin(r * 30.0 - time * 5.0) + 0.5) / 60.0;
    new_texcoord = 0.5 * (new_texcoord + 1.0) + offset;
    
    FragColor = texture(image, new_texcoord);
}
