#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 luminance = vec3(texture(image, texcoord)) * vec3(0.299, 0.587, 0.114);
    FragColor = vec4(luminance.x+luminance.y+luminance.z, luminance.x+luminance.y+luminance.z, luminance.x+luminance.y+luminance.z, 1.0);
}
