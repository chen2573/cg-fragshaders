#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 new_texcoord = texcoord * 2.0 - 1.0;
    float theta = atan(new_texcoord.y, new_texcoord.x);
    float r = pow(length(new_texcoord), 1.5);
    new_texcoord = 0.5 * (vec2(r * cos(theta), r * sin(theta)) + 1.0);
    FragColor = texture(image, new_texcoord);
}
