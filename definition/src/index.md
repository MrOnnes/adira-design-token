# Design Tokens

Design tokens are design decisions, represented as data, that ensure systematically unified and cohesive product experiences.

### What are design tokens?

Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc. — represented as data. These can represent anything defined by design: a color as a RGB value, an opacity as a number, an animation ease as Bezier coordinates. They’re used in place of hard-coded values in order to ensure flexibility and unity across all product experiences.

Design tokens are directly integrated into our component libraries and UI kits. They cover the various options of platform scales, color themes, component states, and more.

---

### Design tokens types

The following types of design tokens are the building blocks and design decisions that make up the Spectrum design language:

## Global Tokens

Global tokens are the primitive values in our design language, represented by context-agnostic names. Our color palette, animation, typography, and dimension values are all recorded as global tokens. These can be directly used, and are inherited by all other token types.

## Alias Tokens

Alias tokens relate to a specific context or abstraction. Aliases help communicate the intended purpose of a token, and are effective when a value with a single intent will appear in multiple places.

## Component-specific Tokens

Component-specific tokens are an exhaustive representation of every value associated with a component. They often inherit from alias tokens, but are named in a way that allows engineering teams to be as specific as possible in applying tokens in component development.

---
