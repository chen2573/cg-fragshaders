#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = round(texture(image, texcoord) * 4.0) / 4.0;
}
